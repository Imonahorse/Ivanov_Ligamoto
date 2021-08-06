import React from 'react';
import Header from './../header/header';
import Article from '../article/article';


function CarCard() {
  return (
    <div className="wrapper">
      <Header/>
      <main>
        <h1 className='visually-hidden'>Карточка автомобиля</h1>
        <Article/>
      </main>
    </div>
  );
}

export default CarCard;
