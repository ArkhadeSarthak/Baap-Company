import './compo.css';

function AICard({ cardHeading, cardPara, imgSrc }) {
    return (
        <div className={`AICard`}>
            <div className='cardPart1'>
                <h1>{cardHeading}</h1>
                <p>{cardPara}</p>
                <button className='AIDiscuss'>Start AI Discussion</button>
            </div>
            <div className='cardPart2'>
                <img src={imgSrc} className='aiCardImage' />
            </div>
        </div>
    )
}

export default AICard;