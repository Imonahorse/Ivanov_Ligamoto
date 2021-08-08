import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function TabItem({children, label, activeTab, ...attrs}){
  const classes = classNames(
    'tab-item',
    {active: activeTab === label},
  );

  return (
    <div className={classes} {...attrs}>
      {children}
    </div>
  );
}

TabItem.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
  activeTab: PropTypes.string,
};

TabItem.defaultProps = {
  children: null,
  activeTab: '',
};

export default TabItem;
