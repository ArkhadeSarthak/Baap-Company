import './compo.css';
import companyVideo from '../../public/company-hd-Video-1.mp4'

function Video() {
    return (
        <>
        <video src={companyVideo} autoPlay muted loop className='baapVideo'></video>
            <h1 className='vdoText'>AI-Powered Digital Infrastructure</h1>
        </>
    )
}

export default Video;