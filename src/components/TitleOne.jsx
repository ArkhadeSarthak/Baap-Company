import './compo.css';

function Title1({para, heading}) {
    return (
        <>
            <div className='enterPrice'>
                <p className='border'>{para}</p>
            </div>
            <h1 className='infStack'>{heading}</h1>
        </>
    )
}


export default Title1;