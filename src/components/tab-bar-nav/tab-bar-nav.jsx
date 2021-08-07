import React from 'react';
import PropTypes from 'prop-types';
import styles from './tab-bar-nav.module.scss';
import cn from 'classnames';

function TabBarNav({ navLabel, activeTab, onChangeActiveTab }) {

  return (
    <button
      type="button"
      className={cn(styles.tab, activeTab === navLabel && styles.tabActive)}
      onClick={() => { onChangeActiveTab(navLabel); }}
    >
      {navLabel}
    </button>
  );
}

TabBarNav.propTypes = {
  navLabel: PropTypes.string,
  activeTab: PropTypes.string,
  onChangeActiveTab: PropTypes.func,
};

TabBarNav.defaultProps = {
  navLabel: 'Tab',
  onChangeActiveTab: () => {},
};

export default TabBarNav;
