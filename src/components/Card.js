import React from 'react';
import './Card.css';

const Card = (props) => {
    return(

        <div className="cardsStyleMain">
            <div className="cardsStyleInner">
              <h3 className="innerStyle"> Note:{ props.note}</h3>
              <h3 className="innerStyle"> Time:{ props.time}</h3>
            </div>
    
        </div>
    );
}

export default Card;