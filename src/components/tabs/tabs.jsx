import React from 'react';
import styles from './tabs.module.scss';
// import Features from './../features/features';
import cn from 'classnames';
// import Comments from './../comments/comments';
// import Contacts from './../contacts/contacts';

const tabs = ['Характеристики', 'Отзывы', 'Контакты'];
const sectionClass = cn(styles.inner, 'container');

function Tabs() {
  return (
    <section className={sectionClass}>
      <h2 className='visually-hidden'>Дополнительная информация</h2>



      {/*<ul className={styles.list}>*/}
      {/*  {*/}
      {/*    tabs.map((tab) => (*/}
      {/*      <li key={tab}>*/}
      {/*        <button className={styles.tab} type='button'>{tab}</button>*/}
      {/*      </li>*/}
      {/*    ))*/}
      {/*  }*/}
      {/*</ul>*/}
      {/*<Features/>*/}
      {/*<Comments/>*/}
      {/*<Contacts/>*/}
    </section>
  );
}

export default Tabs;

