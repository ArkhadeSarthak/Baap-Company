import './compo.css';

function Header2() {
    return (
        <>
            <div className="main">
                <div className='h2One'>
                    <img src="logo.png" alt="Logo" className="logo" />
                </div>
                <div className='h2Two'>
                    <p className='item'>Home</p>
                    <p className='item'>Company</p>
                    <div className='sel1'>
                        <select className='item'>
                            <option>Services</option>
                            <option>Digital Growth Infrastructure</option>
                            <option>Ai System</option>
                            <option>Data Intelligence</option>
                            <option>Software Engineering</option>
                            <option>Talent Infrastructure</option>
                            <option>Web Engineering</option>
                        </select>
                    </div>
                    <div className='sel2'>
                        <select className='item'>
                            <option>Our Products</option>
                            <option>ERP Web + School Book App</option>
                            <option>HRMS + Office Book App</option>
                            <option>CRM + CRM App</option>
                            <option>E-Commerse</option>
                            <option>Task Management + App (Office Book)</option>
                            <option>Janhit App + Web</option>
                            <option>Sangamner AI</option>
                        </select>
                    </div>
                    <p className='item'>Education</p>
                    <p className='item'>Blogs</p>
                    <p className='item'>Community</p>
                </div>
                <div className='h2Three'>
                    <button className='contact'>Contact Us</button>
                </div>
            </div>
        </>
    )
}

export default Header2;