import './compo.css';

function Card3() {
    return (
        <div className='card3Main'>
            <div className='card3p1'>
                <img src='FrontImage.webp' />
            </div>
            <div className='card3p2'>
                <p className='border'>Our Strategic Foundation</p>
                <h1>Built from the Ground Up. Engineered for Scale.</h1>
                <p className='c3para'>The Baap Company is a technology company in Maharashtra built in rural Sangamner on a distributed engineering model that proves world-class software development and digital innovation can emerge from anywhere. Our foundation combines cost-efficient development, strong technical discipline, and scalable system architecture to deliver enterprise-grade digital infrastructure and modern business solutions for growing organizations.</p>
                <div className='pointsC3'>
                    <div>
                        <p className='c3para2'>
                            <i class="fa-regular fa-circle-dot"></i>Distributed Engineering
                        </p>
                        <p className='c3para2'>
                            <i class="fa-regular fa-circle-dot"></i>Scalable Architecture
                        </p>
                        <p className='c3para2'>
                            <i class="fa-regular fa-circle-dot"></i>Cost-Efficient Infrastructure
                        </p>
                    </div>
                    <div>
                        <p className='c3para2'>
                            <i class="fa-regular fa-circle-dot"></i>Enterprise-Grade Standards
                        </p>
                        <p className='c3para2'>
                            <i class="fa-regular fa-circle-dot"></i>Practically Trained Talent
                        </p>
                        <p className='c3para2'>
                            <i class="fa-regular fa-circle-dot"></i>Community-Driven Innovation
                        </p>
                    </div>
                </div>
                <button className='contact'>Explore Our Approch</button>
            </div>
        </div>
    )
}

export default Card3;