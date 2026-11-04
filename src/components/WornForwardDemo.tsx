import { useState } from 'react'
import { ArrowLeft, ArrowRight, Bookmark, Check, CloudRain, Shirt, Sparkles } from 'lucide-react'
import trail from '../assets/worn-forward-front-trail.webp'
import forest from '../assets/worn-forward-front-forest.webp'
import weekend from '../assets/worn-forward-front-hike-v2.webp'

export const trailLooks = [
  { image: trail, title: 'Trail essentials', detail: 'White performance top · Hydration vest · Trail shorts', note: 'Lightweight layers and a hydration vest keep essentials close on faster trails.' },
  { image: forest, title: 'Forest layers', detail: 'Teal shell · Cargo trousers · Compact pack', note: 'A hooded weather shell, roomy cargos and a compact pack suit sheltered woodland trails.' },
  { image: weekend, title: 'Creekside hike', detail: 'Ice-blue hooded shell · Wide navy trousers', note: 'A protective lightweight shell, roomy trousers and a daypack prepare the look for a longer hike.' },
]

export function WornForwardDemo({ compact = false, initialLook = 0 }: { compact?: boolean; initialLook?: number }) {
  const [look, setLook] = useState(initialLook)
  const [activity, setActivity] = useState(['Trail', 'Forest', 'Hike'][initialLook])
  const [saved, setSaved] = useState<number[]>([])
  const [view, setView] = useState('Style')
  const current = trailLooks[look]
  const selectLook = (index: number) => { setLook(index); setActivity(['Trail', 'Forest', 'Hike'][index]) }
  const isSaved = saved.includes(look)
  const toggleSave = () => setSaved(values => isSaved ? values.filter(value => value !== look) : [...values, look])
  return <div className={`wf-app ${compact ? 'wf-app-compact' : ''}`}>
    <div className="wf-app-brand"><strong>RE:WARDROBE</strong><span>YOUR DAILY EDIT</span></div>
    <div className="wf-app-heading"><span>{view === 'Saved' ? `${saved.length} saved ${saved.length === 1 ? 'look' : 'looks'}` : 'YOUR WARDROBE. NEW POSSIBILITIES.'}</span><h2>{view === 'Saved' ? 'Your favourites.' : 'Outside looks good.'}</h2></div>
    <div className="wf-app-weather"><CloudRain size={16} /><span>North Shore · 7° · Light rain</span></div>
    <div className="wf-app-activities" aria-label="Choose an activity">{['Trail', 'Forest', 'Hike'].map(item => <button key={item} aria-pressed={activity === item} onClick={() => { setActivity(item); selectLook(['Trail','Forest','Hike'].indexOf(item)); setView('Style') }}>{item}</button>)}</div>
    {view === 'Saved' && saved.length === 0 ? <div className="wf-app-empty"><Bookmark /><p>Your next favourite is waiting.</p><button onClick={() => setView('Style')}>Explore looks</button></div> : <>
      <div className="wf-app-photo"><span className="wf-app-look-number">{activity.toUpperCase()} / 0{look + 1}</span><img key={current.image} src={current.image} alt={current.title + ', a technical hiking outfit'} /><button className="wf-app-save" onClick={toggleSave} aria-label={isSaved ? 'Unsave this look' : 'Save this look'} aria-pressed={isSaved}>{isSaved ? <Check size={16} /> : <Bookmark size={16} />}</button><span className="wf-app-owned">3 OWNED + 1 NEW</span></div>
      <div className="wf-app-caption"><div><strong>{current.title}</strong><small>{current.detail}</small></div><div className="wf-app-arrows"><button aria-label="Previous outfit" onClick={() => selectLook((look + 2) % 3)}><ArrowLeft size={15}/></button><button aria-label="Next outfit" onClick={() => selectLook((look + 1) % 3)}><ArrowRight size={15}/></button></div></div>
      {!compact && <details className="wf-app-reason"><summary><Sparkles size={13} /> Why this look?</summary><p>{current.note}</p></details>}
    </>}
    <nav className="wf-app-nav" aria-label="Styling preview navigation"><button aria-pressed={view === 'Style'} onClick={() => setView('Style')}><Shirt size={16}/>Style</button><button aria-pressed={view === 'Saved'} onClick={() => {setView('Saved'); if(saved.length) selectLook(saved[0])}}><Bookmark size={16}/>Saved {saved.length > 0 && `(${saved.length})`}</button></nav>
  </div>
}
