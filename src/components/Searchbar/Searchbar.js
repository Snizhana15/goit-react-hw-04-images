import React, { Component } from 'react';
import css from './Searchbar.module.css';
import { ImSearch } from 'react-icons/im';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    searchText: '',
  };
  handelTextChange = e => {
    this.setState({ searchText: e.currentTarget.value.toLowerCase() });
  };
  handelSubmit = e => {
    const { searchText } = this.state;
    e.preventDefault();
    if (searchText.trim() === '') {
      return;
    }
    this.props.onSubmit(searchText);
    this.setState({ searchText: '' });
  };
  render() {
    const { searchText } = this.state;
    return (
      <header className={css.searchbar}>
        <form className={css.form} onSubmit={this.handelSubmit}>
          <button type="submit" className={css.button}>
            <ImSearch />
          </button>

          <input
            className={css.input}
            type="text"
            placeholder="Search images and photos"
            value={searchText}
            onChange={this.handelTextChange}
          />
        </form>
      </header>
    );
  }
}
Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;
