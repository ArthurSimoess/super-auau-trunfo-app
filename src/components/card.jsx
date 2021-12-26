import React from 'react';

function Card ({ name, description, firstAttr, secondAttr, thirdAttr,img, rarity, cardTrunfo }) {;
  return(
    <main className="renderCard-container">
      <section className="card-container">
        <div>
          <p>{ name }</p>
          <img src={ img } alt={ name } />
          <p>{ description }</p>
        </div>
        <div>
          <p>{ firstAttr }</p>
          <p>{ secondAttr }</p>
          <p>{ thirdAttr }</p>
        </div>
        <div>
          <p>{ rarity }</p>
          { cardTrunfo  && <p>Super Trunfo</p> }
        </div>

      </section>
    </main>
  )
}

export default Card;