import { useEffect, useRef, useState } from 'react'
import { Heart, Leaf, RotateCcw, Volume2, VolumeX } from 'lucide-react'
import { forestItems } from './items'
const levels = [{ name: 'Seedling Scout', count: 5, hint: false }, { name: 'Woodland Ranger', count: 15, hint: true }, { name: 'Forest Guardian', count: 24, hint: true }]
const bins = ['Paper', 'Plastic', 'Cans', 'Trash'] as const
type Item = (typeof forestItems)[number]
const scene = (life: number, litter = 0) => `/forest-keepers/scenes/${Math.min(24, Math.max(0, Math.round(life)))}-${Math.min(3, litter)}.svg`
export function ForestKeepersPreview() {
 return <div className="fk-preview"><div className="fk-preview-heading"><span>PLAY. LEARN. GROW.</span><strong>Small choices.<br/>A living forest.</strong></div><img src={scene(24)} alt="The illustrated forest grown through correct recycling choices, with trees, apples, birds, and animals"/><div className="fk-preview-caption"><span><Leaf size={16}/> FOREST KEEPERS</span><span>06 / EDUCATIONAL GAME</span></div></div>
}
export function ForestKeepersDemo() {
 const [level, setLevel] = useState(0), [playing, setPlaying] = useState(false)
 const [deck, setDeck] = useState<Item[]>([]), [index, setIndex] = useState(0)
 const [life, setLife] = useState(0), [litter, setLitter] = useState(0), [mistakes, setMistakes] = useState(0)
 const [feedback, setFeedback] = useState<{good:boolean,text:string}|null>(null), [ending,setEnding] = useState<'win'|'lose'|null>(null)
 const [muted,setMuted] = useState(false)
 const active = useRef<HTMLAudioElement|null>(null), audioToken = useRef(0), locked = useRef(false)
 const chosen = levels[level], item = deck[index]
 function stopSound() { audioToken.current++; active.current?.pause(); active.current = null }
 useEffect(() => () => { audioToken.current++; active.current?.pause() }, [])
 function play(name:string) {
   stopSound(); if(muted) return
   const audio = new Audio(`/forest-keepers/audio/${name}.wav`); audio.volume = .65; active.current = audio
   void audio.play().catch(() => { /* A blocked browser audio request must not stop play. */ })
 }
 function start() {
  stopSound(); const pool = level===0 ? forestItems.filter(x=>['Cardboard box','Newspaper','Paper envelope','Plastic bottle','Water bottle','Yogurt bottle','Drink can','Tuna can','Fruit can','Used tissue','Used bandage','Used mask'].includes(x.name)) : [...forestItems]
  const shuffled:Item[]=[...pool]; for(let i=shuffled.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[shuffled[i],shuffled[j]]=[shuffled[j],shuffled[i]]}
  setDeck(shuffled.slice(0,chosen.count));setIndex(0);setLife(0);setLitter(0);setMistakes(0);setFeedback(null);setEnding(null);locked.current=false;setPlaying(true)
 }
 function answer(bin:string) {
  if(locked.current||feedback||ending||!item)return;locked.current=true
  if(bin===item.bin){
    const next=index+1, growth=next===chosen.count?24:Math.min(24,life+24/chosen.count), clean=next===chosen.count?0:Math.max(0,litter-1)
    setLife(growth);setLitter(clean)
    if(next===chosen.count){setEnding('win');play('win');return}
    const before=Math.round(life)-litter*4,after=Math.round(growth)-clean*4
    const arrivals:[number,string,string][]=[[7,'bird','A bird is singing!'],[12,'rabbit','A rabbit has come home!'],[13,'squirrel','A squirrel has arrived!'],[16,'duck','A duck is on the stream!'],[20,'deer','A deer has come home!'],[22,'owl','An owl has found a home!']]
    const arrival=arrivals.find(([at])=>before<at&&after>=at)
    play(arrival?.[1]||'correct');setFeedback({good:true,text:arrival?.[2]||'Your forest is growing! Well done.'})
  }else{
    const errors=mistakes+1;setMistakes(errors);setLitter(Math.min(3,litter+1));setLife(Math.max(0,life-(bin==='ground'?2:1)))
    if(errors===3){setLife(0);setEnding('lose');play('lose');return}
    play('fly');setFeedback({good:false,text:bin==='ground'?'Litter hurts the forest. Try the right bin to help it recover.':chosen.hint ? `${item.hint} Try another bin!` : 'That is not the right bin. Give it another try!'})
  }
 }
 function next(){if(feedback?.good)setIndex(n=>n+1);setFeedback(null);locked.current=false}
 return <div className={`fk-demo ${playing ? 'is-playing' : 'is-ready'}`} data-language-controlled="true" aria-label="Playable browser adaptation of Forest Keepers">
  <div className="fk-demo-top"><span>FOREST KEEPERS</span><button type="button" aria-label={muted?'Enable sound':'Mute sound'} aria-pressed={muted} onClick={()=>{stopSound();setMuted(!muted)}}>{muted?<VolumeX size={20}/>:<Volume2 size={20}/>}</button></div>
  <div className="fk-demo-body">{!playing?<><h3>Let’s grow a forest.</h3><img className="fk-demo-scene" src={scene(24)} alt="A thriving forest with birds, trees and animals"/><div className="fk-levels">{levels.map((l,i)=><button type="button" key={l.name} aria-pressed={i===level} onClick={()=>setLevel(i)}><span>{l.name}</span><small>{l.count} items{l.hint?' · with hints':''}</small></button>)}</div><button type="button" className="fk-game-primary" onClick={start}>Let’s grow! →</button></>:
  <><div className="fk-demo-status"><span aria-label={`${3-mistakes} lives left`}>{[0,1,2].map(i=><Heart key={i} size={21} fill={i<3-mistakes?'#EF8C8A':'none'} color={i<3-mistakes?'#EF8C8A':'#76907C'}/>)}</span><span>{Math.min(index+(feedback?.good||ending==='win'?1:0),chosen.count)} / {chosen.count} sorted</span></div>
  <img className="fk-demo-scene" src={scene(life,litter)} alt={litter?'A damaged forest with rubbish and flies':`Your forest is ${Math.round(life/24*100)} percent restored`}/><div className="fk-demo-meter"><span style={{width:`${life/24*100}%`}}/></div>
  <div className="fk-demo-controls">{ending?<div className="fk-game-result" role="status"><span>{ending==='win'?'FOREST RESTORED!':'GAME OVER'}</span><h3>{ending==='win'?'You are a Forest Guardian!':'Your forest needs you.'}</h3><p>{ending==='win'?'You created a beautiful home for plants and animals.':'Three hearts, three chances. Take what you learned and try again.'}</p><button type="button" className="fk-game-primary" onClick={start}>Play again ↻</button><button type="button" className="fk-game-secondary" onClick={()=>{stopSound();setPlaying(false)}}>Choose adventure</button></div>:
   feedback?<div className="fk-game-result" role="status"><h3>{feedback.good?'Great sorting!':'Try again!'}</h3><p>{feedback.text}</p><button type="button" className="fk-game-primary" onClick={next}>{feedback.good?'Next item →':'Try this item again ↻'}</button></div>:
   <div className="fk-demo-question"><span>ITEM {index+1} / {chosen.count}</span><div className="fk-demo-item"><img src={`/forest-keepers/items/${item.name.toLowerCase().replace(/[^a-z0-9]+/g,'-')}.svg`} alt=""/><h3>{item.name}</h3></div>{chosen.hint&&<p>{item.hint} Try {item.bin}.</p>}<div className="fk-demo-bins">{bins.map((bin,i)=><button type="button" key={bin} className={`fk-bin-${i}`} onClick={()=>answer(bin)}>{bin}</button>)}</div><button type="button" className="fk-demo-litter" onClick={()=>answer('ground')}>What if I litter?</button></div>}</div>
  {!ending&&<button type="button" className="fk-game-secondary" onClick={()=>{stopSound();setPlaying(false)}}><RotateCcw size={14}/> Choose adventure</button>}</>}</div>
 </div>
}
