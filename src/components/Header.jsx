import './compo.css'

function Header() {

    function closeHeading() {
        document.getElementById("header").style.display = "none";
    }

    return (
        <>
            <div className="header" id='header'>
                <div className="hPart1">
                    <i class="fa-brands fa-square-facebook"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                </div>
                <div className="hPart2">
                    <div>
                        <i class="fa-solid fa-phone"></i>
                        <h4>+91 9105868788</h4>
                    </div>
                    <div>
                        <i class="fa-solid fa-envelope"></i>
                        <h4>info@baapcompany.com</h4>
                    </div>
                    <button className='close' onClick={closeHeading}><i class="fa-solid fa-x"></i></button>
                </div>
            </div>
        </>
    )
}

export default Header;
