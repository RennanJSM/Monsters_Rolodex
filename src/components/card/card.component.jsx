import './card.styles.css';

const Card = ({monstro}) => {
 
    const { name, id, email } = monstro;

    return (        
        <div className='card-container' key={id}>
            <img alt={`monstro ${name}`}  src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )  

}

export default Card;
