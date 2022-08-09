import { useState } from 'react';
import css from './Searchbar.module.css';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  const [searchText, setSearchText] = useState('');
  const handelTextChange = e => {
    setSearchText(e.currentTarget.value.toLowerCase());
  };
  const handelSubmit = e => {
    e.preventDefault();
    if (searchText.trim() === '') {
      return;
    }
    onSubmit(searchText);
    setSearchText('');
  };
  return (
    <header className={css.searchbar}>
      <form className={css.form} onSubmit={handelSubmit}>
        <button type="submit" className={css.button}>
          <ImSearch />
        </button>

        <input
          className={css.input}
          type="text"
          placeholder="Search images and photos"
          value={searchText}
          onChange={handelTextChange}
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
