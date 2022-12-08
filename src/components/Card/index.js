import './card-styles.css';

function Card({ title, cover }) {
    return (
        <div className='card-box'
            style={{ backgroundImage: `url(${cover})` }}>
            <div className='title-box'>
                <h1>{title}</h1>

            </div>
        </div>
    )
}

export default Card