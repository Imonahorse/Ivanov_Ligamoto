// import React, {useState} from 'react';
// import TabBarNav from './../tab-bar-nav/tab-bar-nav'
//
// function TabBar({children}) {
//   const [activeTab, setActiveTab] = useState(null);
//
//   const getChildrenLabels = (children) => children.map(({props}) => props.label);
//   const setActiveTab = (activeTab) => {
//     const {activeTab: currentTab} = this.state;
//
//     if (currentTab !== activeTab) {
//       this.setState({
//         activeTab,
//       });
//     }
//   }
//
//   useState(() => {
//     const activeTab = this.getChildrenLabels(children)[0];
//     setActiveTab(activeTab)
//   })
//
//
//   render()
//   {
//     return (
//       <div className={classes} {...attrs}>
//         <div>
//           {
//             getChildrenLabels(children).map(navLabel => (
//               <TabBarNav
//                 key={navLabel}
//                 navLabel={navLabel}
//                 className={classNames({active: activeTab === navLabel})}
//                 onChangeActiveTab={this.setActiveTab}
//               />
//             ))
//           }
//         </div>
//         <div>
//           {React.Children.map(children, child => React.cloneElement(child, {activeTab}))}
//         </div>
//       </div>
//     );
//   }
// }
