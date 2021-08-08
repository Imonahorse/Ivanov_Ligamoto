import React from 'react';
import PropTypes from 'prop-types';
import styles from './tab-nav.module.scss';
import cn from 'classnames';

function TabNav({ navLabel, activeTab, onChangeActiveTab }) {

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

TabNav.propTypes = {
  navLabel: PropTypes.string,
  activeTab: PropTypes.string,
  onChangeActiveTab: PropTypes.func,
};

TabNav.defaultProps = {
  navLabel: 'Tab',
  onChangeActiveTab: () => {},
};

export default TabNav;
