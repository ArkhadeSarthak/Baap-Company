import './compo.css';

function Footer() {
    return (
        <>
            <div className='ftMain'>
                <div className='ftSub ftlogo'>
                    <div>
                        <img src='logo.png' />
                    </div>
                    <p>
                        <strong>The Baap Company </strong>
                        works at the intersection of technology, education, agriculture, and community development,creating real opportunities rooted in rural Maharashtra.
                    </p>
                    <div className='ftLogo'>
                        <div className='ic1'>
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                        <div className='ic2'>
                            <i class="fa-brands fa-linkedin"></i>
                        </div>
                        <div className='ic3'>
                            <i class="fa-brands fa-square-facebook"></i>
                        </div>
                        <div className='ic4'>
                            <i class="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                </div>
                <div className='ftSub ftpara'>
                    <h3>Services</h3>
                    <p>Software Engineering</p>
                    <p>AI Systems</p>
                    <p>Digital Infrastructure</p>
                    <p>Data Intelligence</p>
                </div>
                <div className='ftSub ftpara'>
                    <h3>Company</h3>
                    <p>About Baap</p>
                    <p>Products</p>
                    <p>Blogs</p>
                </div>
                <div className='ftSub ftpara'>
                    <h3>Initiatives</h3>
                    <p>Education</p>
                    <p>Gao Gotha</p>
                </div>
                <div className='ftSub'>
                    <h3>Contact Us</h3>
                    <div className='contactUs'>
                        <div className='contactIco'>
                            <i class="fa-solid fa-location-dot"></i>
                        </div>
                        <div className='contactPara'>
                            <p>The Baap Company At Paregaon, Tal. Sangamner, Maharashtra,
                                422611, India</p>
                        </div>
                    </div>
                    <div className='contactUs'>
                        <div className='contactIco'>
                            <i class="fa-solid fa-phone-volume"></i>
                        </div>
                        <div className='contactPara'>
                            <p>+91 9105868788</p>
                        </div>
                    </div>
                    <div className='contactUs'>
                        <div className='contactIco'>
                            <i class="fa-regular fa-envelope"></i>
                        </div>
                        <div className='contactPara'>
                            <p>info@baapcompany.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ftMain2'>
                <div>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                </div>
                <div>
                    <p>Created By: <strong>Sarthak A</strong></p>
                </div>
                <p className='copyRight'>2026 ⓒ Baap Services Private Limited</p>
            </div>
        </>
    )
}


export default Footer;