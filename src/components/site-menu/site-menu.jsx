import React from 'react';
import PropTypes from 'prop-types';
import styles from './site-menu.module.scss';
import cn from 'classnames';

function SiteMenu({buttons, className}) {
  const liClass = cn(className, styles.item);

  return (
    <ul className={styles.list}>
      {
        buttons.map((button) => (
          <li className={liClass} key={button}>
            <a href="/#">{button}</a>
          </li>
        ))
      }
    </ul>
  );
}

SiteMenu.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string.isRequired,
};

export default SiteMenu;

