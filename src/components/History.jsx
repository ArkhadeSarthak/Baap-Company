import './compo.css';

function History({ year, yearPara, client, clientPara, user, userPara, engineers, engineersPara }) {
    return (
        <div className='history'>
            <div className='hCard'>
                <h1>{year}</h1>
                <p>{yearPara}</p>
            </div>
            <div className='hCard'>
                <h1>{client}</h1>
                <p>{clientPara}</p>
            </div>
            <div className='hCard'>
                <h1>{user}</h1>
                <p>{userPara}</p>
            </div>
            <div className='hCard'>
                <h1>{engineers}</h1>
                <p>{engineersPara}</p>
            </div>
        </div>
    )
}

export default History;