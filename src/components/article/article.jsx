import React from 'react';
import cn from 'classnames';
import styles from './article.module.scss';
import leftButton from './../../img/left-button.svg';
import rightButton from './../../img/right-button.svg';
import firstSlide from '../../img/slide-one.jpg';
import secondSlide from '../../img/slide-two.jpg';
import thirdSlide from '../../img/slide-three.jpg';


function Article() {
  const articleContainer = cn('container', styles.section);

  return (
    <section className={articleContainer}>
      <h2 className='visually-hidden'>Основная информация</h2>
      <article className={styles.article}>
        <div className={styles.left}>
          <div className={styles.promo}>
            <span className={styles.label}>new model</span>
            <img src={firstSlide} alt="Фото автомобиля"/>
          </div>
          <div className={styles.slider}>
            <button className={styles.button} type='button'>
              <img src={leftButton} alt="Кнопка слайдера влево"/>
            </button>
            <img className={styles.img} src={firstSlide} alt="Фото автомобиля"/>
            <img className={styles.img} src={thirdSlide} alt="Фото автомобиля"/>
            <img className={styles.img} src={secondSlide} alt="Фото автомобиля"/>
            <button className={styles.button} type='button'>
              <img src={rightButton} alt="Кнопка слайдера вправо"/>
            </button>
          </div>
        </div>
        <div>
          <h3 className={styles.title}>Марпех 11</h3>
          <ul className={styles.features}>
            <li className={`${styles.itemEngine} ${styles.item}`}>бензин</li>
            <li className={`${styles.itemPower} ${styles.item}`}>механика</li>
            <li className={`${styles.itemTransmission} ${styles.item}`}>100 л.с.</li>
            <li className={`${styles.itemVolume} ${styles.item}`}>1.4 л</li>
          </ul>
          <div className={styles.price}>
            <span className={styles.newPrice}>2 300 000 ₽</span>
            <span className={styles.oldPrice}>2  400 000 ₽</span>
          </div>
          <button className={styles.redButton} type='button'>Оставить заявку</button>
        </div>
      </article>
    </section>
  );
}

export default Article;
