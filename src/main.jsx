// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )


import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 1) 기존 전역/리셋 먼저
import './index.css'
// 2) 공통 베이스 그 다음 (전역에서 딱 1번만)
import './styles/ProjectBase.css'

import App from './App.jsx'

// main.jsx 최상단 근처
if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
