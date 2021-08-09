import React from 'react';
import styles from './tabs.module.scss';
import TabBar from '../tab-bar/tab-bar';
import TabItem from '../tab-item/tab-item';
import Features from '../features/features';
import Reviews from '../reviews/reviews';
import Contacts from './../contacts/contacts';

function Tabs() {
  return (
    <section className='container'>
      <div className={styles.inner}>
        <h2 className='visually-hidden'>Дополнительная информация</h2>
        <TabBar>
          <TabItem label={'Характеристики'}>
            <Features/>
          </TabItem>
          <TabItem label={'Отзывы'}>
            <Reviews/>
          </TabItem>
          <TabItem label={'Контакты'}>
            <Contacts/>
          </TabItem>
        </TabBar>
      </div>
    </section>
  );
}

export default Tabs;

