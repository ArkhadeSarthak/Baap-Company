import './compo.css';

function Card2({ cardHeading, cardPara, imgSrc, clsName}) {
    return (
        <div className={`card2 ${clsName}`}>
            <div className='cardPart1'>
                <img src={imgSrc} className='cardImage2' />
            </div>
            <div className='cardPart2'>
                <h1>{cardHeading}</h1>
                <p>{cardPara}</p>
            </div>
        </div>
    )
}


export default Card2;