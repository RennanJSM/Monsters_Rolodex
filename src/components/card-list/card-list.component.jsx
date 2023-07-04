import './card-list.styles.css';
import Card from '../card/card.component.jsx';

const CardList = ({ monstros }) => (           
    <div className='card-list'>
        {monstros.map((monstro) => {                  
            return (
                <Card monstro={monstro} />
            )
        }
)}
    </div>
        
)


export default CardList;
