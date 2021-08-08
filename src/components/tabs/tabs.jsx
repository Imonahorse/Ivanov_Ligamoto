import React from 'react';
import styles from './tabs.module.scss';
import cn from 'classnames';
import TabBar from '../tab-bar/tab-bar';
import TabBarItem from '../tab-bar-item/tab-bar-item';
import Features from '../features/features';
import Reviews from '../reviews/reviews';
import Contacts from './../contacts/contacts';

const sectionClass = cn(styles.inner, 'container');

function Tabs() {
  return (
    <section className={sectionClass}>
      <h2 className='visually-hidden'>Дополнительная информация</h2>
      <TabBar>
        <TabBarItem label={'Характеристики'}>
          <Features/>
        </TabBarItem>
        <TabBarItem label={'Отзывы'}>
          <Reviews/>
        </TabBarItem>
        <TabBarItem label={'Контакты'}>
          <Contacts/>
        </TabBarItem>
      </TabBar>
    </section>
  );
}

export default Tabs;

