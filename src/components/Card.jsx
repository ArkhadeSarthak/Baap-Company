import './compo.css';

function Card1({ cardHeading, cardPara, imgSrc, clsName }) {
    return (
        <div className={`card1 ${clsName}`}>
            <div className='cardPart1'>
                <h1>{cardHeading}</h1>
                <p>{cardPara}</p>
            </div>
            <div className='cardPart2'>
                <img src={imgSrc} className='cardImage1' />
            </div>
        </div>
    )
}


export default Card1;