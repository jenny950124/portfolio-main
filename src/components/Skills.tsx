import type { PortfolioCopy } from '../data/copy'
import './skills.css'

const skillsCopy = {
  en: {
    label: 'Skills & tools',
    title: 'From understanding the problem to bringing an idea to life.',
    groups: [
      { title: 'Research & design', note: 'Understand people, explore ideas, and refine the experience.', items: ['UX research', 'User flows', 'Wireframing', 'Interaction design', 'Prototyping', 'Usability testing', 'Responsive design'] },
      { title: 'Creative tools', note: 'Shape interfaces, visual assets, and interactive prototypes.', items: ['Figma', 'Adobe Creative Suite'] },
      { title: 'Development', note: 'Bring design decisions into the browser.', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Git / GitHub'] },
      { title: 'Content & marketing', note: 'Connect a brand with the people it wants to reach.', items: ['Instagram management', 'Digital content', 'WordPress', 'SEO keyword research', 'On-page optimization'] },
    ],
  },
  ko: {
    label: '스킬과 도구',
    title: '문제를 이해하는 순간부터 아이디어를 구현하기까지.',
    groups: [
      { title: '리서치와 디자인', note: '사람을 이해하고 아이디어를 탐색하며 경험을 다듬습니다.', items: ['UX 리서치', '사용자 흐름', '와이어프레임', '인터랙션 디자인', '프로토타이핑', '사용성 테스트', '반응형 디자인'] },
      { title: '디자인 도구', note: '인터페이스와 시각 자료, 인터랙티브 프로토타입을 만듭니다.', items: ['Figma', 'Adobe Creative Suite'] },
      { title: '개발', note: '디자인에서 내린 결정을 브라우저에 구현합니다.', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Git / GitHub'] },
      { title: '콘텐츠와 마케팅', note: '브랜드와 그 브랜드가 만나고 싶은 사람들을 연결합니다.', items: ['인스타그램 운영', '디지털 콘텐츠', 'WordPress', 'SEO 키워드 리서치', '온페이지 최적화'] },
    ],
  },
}

export function Skills({ t }: { t: PortfolioCopy }) {
  const content = skillsCopy[t.aboutLabel === '소개' ? 'ko' : 'en']
  return (
    <section className="skills-section page-grid" id="skills" aria-labelledby="skills-title">
      <div className="skills-intro">
        <p className="eyebrow">05 · {content.label}</p>
        <h2 id="skills-title">{content.title}</h2>
      </div>
      <div className="skills-groups">
        {content.groups.map(group => (
          <article className="skills-group" key={group.title}>
            <div><h3>{group.title}</h3><p>{group.note}</p></div>
            <ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  )
}
