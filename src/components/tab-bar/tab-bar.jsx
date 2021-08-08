import React, {useState} from 'react';
import TabNav from '../tab-nav/tab-nav';
import PropTypes from 'prop-types';

function TabBar({children}) {
  const [activeTab, setActiveTab] = useState(null);

  const getChildrenLabels = (items) => items.map(({props}) => props.label);

  useState(() => {
    const initialTab = getChildrenLabels(children)[0];
    setActiveTab(initialTab);
  });

  const changeActiveTab = (tab) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
    }
  };

  return (
    <div>
      <div>
        {
          getChildrenLabels(children).map((navLabel) => (
            <TabNav
              key={navLabel}
              navLabel={navLabel}
              activeTab={activeTab}
              onChangeActiveTab={changeActiveTab}
            />
          ))
        }
      </div>
      <div>
        {children.map((child) => child.props.label === activeTab && child)}
      </div>
    </div>
  );
}

TabBar.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
};

TabBar.defaultProps = {
  children: null,
  className: '',
};

export default TabBar;
