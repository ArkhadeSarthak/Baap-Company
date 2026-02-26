import './compo.css';

function SmallCard({ imgSrc, heading, para, cls }) {
    return (
        <div className={`cardSM ${cls}`}>
            <div className='cardSMP1'>
                <i className={imgSrc}></i>
            </div>
            <div className='cardSMP2'>
                <h3>{heading}</h3>
                <p className='SMCardPara'>{para}</p>
            </div>
        </div>
    )
}

export default SmallCard;