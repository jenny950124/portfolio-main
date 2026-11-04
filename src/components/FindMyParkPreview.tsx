import readingLawn from '../assets/find-my-park-reading-lawn.jpg'
import discoveryScreen from '../assets/find-my-park-main-mockup.webp'
import recommendationScreen from '../assets/find-my-park-detail-mockup.webp'
import './find-my-park-preview.css'

export function FindMyParkPreview() {
  return (
    <div className="fmp-editorial-preview">
      <img
        className="fmp-editorial-photo"
        src={readingLawn}
        alt="Two people enjoying a quiet reading moment on the grass beside a pond"
      />
      <div className="fmp-preview-heading" aria-hidden="true">
        <span>AI-POWERED DISCOVERY</span>
        <strong>A park for<br />your moment.</strong>
      </div>
      <div className="fmp-editorial-screens">
        <img src={discoveryScreen} alt="Find My Park: describe your needs and mood" />
        <img src={recommendationScreen} alt="A recommended park with details to help you choose" />
      </div>
      <div className="fmp-preview-flow" aria-hidden="true">
        <span>Your needs</span><i /><span>Your match</span>
      </div>
    </div>
  )
}
