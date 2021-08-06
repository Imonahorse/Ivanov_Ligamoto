import React from 'react';
import Header from './../header/header';
import Article from './../article/article';
import Tabs from './../tabs/tabs';
import Footer from '../footer/footer';


function CarCard() {
  return (
    <div className="wrapper">
      <Header/>
      <main>
        <h1 className='visually-hidden'>Карточка автомобиля</h1>
        <Article/>
        <Tabs/>
      </main>
      <Footer/>
    </div>
  );
}

export default CarCard;
