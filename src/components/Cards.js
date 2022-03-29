import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check Out The Best Books!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='They are named black holes because they are related to human fears of being destroyed or gobbled up I dont have fears of being thrown into them, I understand them I feel in a sense that I am their master -Stephen Hawking'
              label='Readmore'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='To shut your eyes is to guess nothing of blindness. Beneath your world of skies and faces and buildings exists a rawer and older world, a place where surface planes disintegrate and sounds ribbon in shoals through the air -Anthony Doerr'
              label='Readmore'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Epic literature is not history but is again a way of looking at the past -Romila Thapar'
              label='Readmore'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='We are all born with a divine fire in us. Our efforts should be to give wings to this fire and fill the world with the glow of its goodness- APJ Abdul Kalam'              
              label='Readmore'
              path='/products'
            />
            <CardItem
              src='images/img-5.jpg'
              text='No one is born hating another person because of the color of his skin, or his background, or his religion. People must learn to hate, and if they can learn to hate, they can be taught to love, for love comes more naturally to the human heart than its opposite- Nelson Mandela'
              label='Readmore'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
