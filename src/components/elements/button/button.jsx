import React from 'react';
import styles from './button.module.scss';
import cn from 'classnames';
import PropTypes from 'prop-types';

function Button({
  children, red, white, className, onClick, disabled, ...attrs
}) {
  const buttonClass = cn(
    styles.button,
    red && styles.red,
    white && styles.white,
    className,
  );
  const Tag = attrs.href ? 'a' : 'button';

  return (
    <Tag
      {...attrs}
      className={buttonClass}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </Tag>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  red: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  white: PropTypes.bool,
};

Button.defaultProps = {
  children: 'button',
  red: false,
  white: false,
  className: '',
  onClick: () => {},
  disabled: false,
};

export default Button;
