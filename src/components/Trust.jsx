import './compo.css';

function TrustCard({ src, cls, name, role, desc }) {
    return (
        <div className='trustSub'>
            <div className='people'>
                <div className='photo'>
                    <img src={src} />
                </div>
                <div className='quotes'>
                    <h1><i class={cls}></i></h1>
                </div>
            </div>
            <div className='peopleInfo'>
                <h3 className='nameOfPeople'>{name}</h3>
                <p className='roleOfPeople'>{role}</p>
                <p className='descriptionOfPeople'>{desc}</p>
            </div>
        </div>
    )
}

export default TrustCard;