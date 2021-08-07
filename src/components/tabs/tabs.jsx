import React from 'react';
import styles from './tabs.module.scss';
import cn from 'classnames';
import TabBar from '../tab-bar/tab-bar';
import TabBarItem from '../tab-bar-item/tab-bar-item';
import Features from '../features/features';
import Comments from './../comments/comments';
import Contacts from './../contacts/contacts';

const tabs = ['Характеристики', 'Отзывы', 'Контакты'];
const sectionClass = cn(styles.inner, 'container');

function Tabs() {
  return (
    <section className={sectionClass}>
      <h2 className='visually-hidden'>Дополнительная информация</h2>
      <TabBar>
        <TabBarItem label={tabs[0]}>
          <Contacts/>
        </TabBarItem>
        <TabBarItem label={tabs[1]}>
          <Comments/>
        </TabBarItem>
        <TabBarItem label={tabs[2]}>
          <Features/>
        </TabBarItem>
      </TabBar>
    </section>
  );
}

export default Tabs;

