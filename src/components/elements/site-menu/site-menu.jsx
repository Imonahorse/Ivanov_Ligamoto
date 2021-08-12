import React from 'react';
import PropTypes from 'prop-types';
import styles from './site-menu.module.scss';
import cn from 'classnames';

function SiteMenu({buttons, item, list=''}) {
  const liClass = cn(item, styles.item);
  const listClass = cn(list, styles.list);

  return (
    <ul className={listClass}>
      {
        buttons.map((button) => (
          <li className={liClass} key={button}>
            <a className={styles.link} href="/#">{button}</a>
          </li>
        ))
      }
    </ul>
  );
}

SiteMenu.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.string).isRequired,
  item: PropTypes.string.isRequired,
  list: PropTypes.string,
};

export default SiteMenu;

