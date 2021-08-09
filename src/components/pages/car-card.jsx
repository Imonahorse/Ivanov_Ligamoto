import React from 'react';
import Header from '../elements/header/header';
import Article from '../elements/article/article';
import Tabs from '../elements/tabs/tabs';
import Footer from '../elements/footer/footer';
import styles from './car-card.module.scss';


function CarCard() {
  return (
    <div className={styles.wrapper}>
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
