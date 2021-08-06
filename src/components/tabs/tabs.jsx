import React from 'react';
import styles from './tabs.module.scss';
import Features from '../features/features';
import cn from 'classnames';

const tabs = ['Характеристики', 'Отзывы', 'Контакты'];
const sectionClass = cn(styles.inner, 'container');

function Tabs() {
  return (
    <section className={sectionClass}>
      <h2 className='visually-hidden'>Дополнительная информация</h2>
      <div>
        {
          tabs.map((tab) => (
            <button className={styles.tab} type='button' key={tab}>{tab}</button>
          ))
        }
      </div>
      <Features/>
    </section>
  );
}

export default Tabs;

