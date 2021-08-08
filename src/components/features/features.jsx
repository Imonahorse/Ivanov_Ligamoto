import React from 'react';
import styles from './features.module.scss';

const features = {
  'Трансмиссия': 'Роботизированная',
  'Мощность двигателя, л.с.': '249',
  'Тип двигателя': 'Бензиновый',
  'Привод': 'Полный',
  'Объем двигателя, л': '2.4',
  'Макс. крутящий момент': '370/4500',
  'Количество цилиндров': '4',
};

function Features() {
  return (
    <dl className={styles.list}>
      <h3 className='visually-hidden'>Характеристики автомобиля</h3>
      {
        Object.entries(features).map(([dt, dd]) => (
          <div className={styles.item} key={dt}>
            <dt>{dt}</dt>
            <dd className={styles.description}>{dd}</dd>
          </div>
        ))
      }
    </dl>
  );
}

export default Features;
