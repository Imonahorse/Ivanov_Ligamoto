import React from 'react';
import styles from './tabs.module.scss';
import cn from 'classnames';
import TabBar from '../tab-bar/tab-bar';
import TabItem from '../tab-item/tab-item';
import Features from '../features/features';
import Reviews from '../reviews/reviews';
import Contacts from './../contacts/contacts';

const sectionClass = cn(styles.inner, 'container');

function Tabs() {
  return (
    <section className={sectionClass}>
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
    </section>
  );
}

export default Tabs;

