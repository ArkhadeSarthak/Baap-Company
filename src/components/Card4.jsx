import './compo.css';

function Card4({ cls, num, heading, para }) {
    return (
        <div className={cls}>
            <h1>{num}</h1>
            <h3>{heading}</h3>
            <p>{para}</p>
        </div>
    )
}

export default Card4;