import { Sparkles } from 'lucide-react'
import './find-my-park-preview.css'

export function FindMyParkRequest() {
  return (
    <div className="fmp-preview-request">
      <span className="fmp-preview-request-label"><Sparkles size={13} aria-hidden="true" /> AI-powered park discovery</span>
      <p>“Find me somewhere quiet to read a book and sip coffee.”</p>
      <span className="fmp-preview-request-response">Your moment → A park that fits</span>
    </div>
  )
}
