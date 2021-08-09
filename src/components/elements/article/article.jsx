import React from 'react';
import cn from 'classnames';
import styles from './article.module.scss';
import Slider from '../slider/slider';
import Button from '../button/button';

function Article() {
  const articleContainer = cn('container', styles.section);

  return (
    <section className={articleContainer}>
      <h2 className='visually-hidden'>Основная информация</h2>
      <article className={styles.article}>
        <div className={styles.left}>
          <Slider/>
        </div>
        <div className={styles.right}>
          <h3 className={styles.title}>Марпех 11</h3>
          <ul className={styles.features}>
            <li className={`${styles.item_engine} ${styles.item}`}>бензин</li>
            <li className={`${styles.item_power} ${styles.item}`}>механика</li>
            <li className={`${styles.item_transmission} ${styles.item}`}>100 л.с.</li>
            <li className={`${styles.item_volume} ${styles.item}`}>1.4 л</li>
          </ul>
          <div className={styles.price}>
            <span className={styles.new_price}>2 300 000 ₽</span>
            <span className={styles.old_price}>2  400 000 ₽</span>
          </div>
          <div className={styles.links}>
            <Button red className={styles.button} type='button'>Оставить заявку</Button>
            <Button white href='/#' className={styles.button}>В кредит от 11 000 ₽</Button>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Article;
