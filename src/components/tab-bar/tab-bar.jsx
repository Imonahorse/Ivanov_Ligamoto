import React, {useState} from 'react';
import TabBarNav from './../tab-bar-nav/tab-bar-nav'
import PropTypes from 'prop-types';

function TabBar({children, className}) {
  const [activeTab, setActiveTab] = useState(null);

  const getChildrenLabels = (items) => items.map(({props}) => props.label);

  const changeActiveTab = (tab) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
    }
  };

  useState(() => {
    const initialTab = getChildrenLabels(children)[0];
    setActiveTab(initialTab);
  });

  return (
    <div>
      <div>
        {
          getChildrenLabels(children).map((navLabel) => (
            <TabBarNav
              key={navLabel}
              navLabel={navLabel}
              // className={classNames({active: activeTab === navLabel})}
              onChangeActiveTab={changeActiveTab}
            />
          ))
        }
      </div>
      <div>
        {React.Children.map(children, child => React.cloneElement(child, {activeTab}))}
      </div>
    </div>
  );
}

TabBar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  vertical: PropTypes.bool,
};

TabBar.defaultProps = {
  children: null,
  className: '',
  vertical: false,
};

export default TabBar;
