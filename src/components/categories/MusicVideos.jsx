import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

function MusicVideos() {
  return (
    <>
    <div className="music-videos">
        <h2>Music Videos</h2>
        <div className="wrapper">
            <FontAwesomeIcon className='left' icon={faArrowAltCircleLeft}/>
            <FontAwesomeIcon className='right' icon={faArrowAltCircleRight}/>
            <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/LxcmF_Kk0Ho?si=anZUmV37oyN6ts4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </div>
    </div>
    </>
  )
}

export default MusicVideos