import React from 'react';
import PropTypes from 'prop-types';
import css from './Button.module.css';

const Button = ({ click }) => {
  return (
    <button type="button" onClick={click} className={css.button}>
      Load more
    </button>
  );
};
Button.propTypes = {
  click: PropTypes.func,
};

export default Button;
