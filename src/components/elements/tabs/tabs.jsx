import React, {useState} from 'react';
import styles from './tabs.module.scss';
import Features from '../features/features';
import Reviews from '../reviews/reviews';
import Contacts from '../contacts/contacts';
import cn from 'classnames';

const TabNav = {
  SPECIFICATION: 'Характеристики',
  REVIEWS: 'Отзывы',
  CONTACTS: 'Контакты',
};

function Tabs() {
  const [activeTab, setActiveTab] = useState(null);
  const labels = Object.values(TabNav);

  useState(() => {
    const initialTab = labels[0];
    setActiveTab(initialTab);
  });

  const changeActiveTab = (tab) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
    }
  };

  return (
    <section className='container'>
      <div className={styles.inner}>
        <h2 className='visually-hidden'>Дополнительная информация</h2>
        <div>
          {
            labels.map((label) => (
              <button
                key={label}
                type="button"
                className={cn(styles.tab, activeTab === label && styles.tab_active)}
                onClick={() => {
                  changeActiveTab(label);
                }}
              >
                {label}
              </button>
            ))
          }
        </div>
        <div>
          {TabNav.SPECIFICATION === activeTab && <Features/>}
          {TabNav.REVIEWS === activeTab && <Reviews/>}
          {TabNav.CONTACTS === activeTab && <Contacts/>}
        </div>
      </div>
    </section>
  );
}

export default Tabs;

