import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((card, index) => {
            return (
              <Card 
                card ={card} 
                key = {index} 
              />
            )
          })
      /* Using the cards prop, map over the list creating a 
      new Card component for each passing the card as the only prop*/}
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object)  
}
// Make sure you include prop types for all of your incoming props

export default Cards;