import React, { Component } from 'react';
import css from './App.module.css';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import getImages from '../Service/Api';
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';

class App extends Component {
  state = {
    images: [],
    searchText: '',
    page: 1,
    isVisible: false,
    showModal: false,
    loading: false,
  };
  toggleModal = id => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      id: id,
    }));
  };
  handelSubmitForm = text => {
    this.setState({ searchText: text, page: 1, isVisible: false, images: [] });
  };
  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  getPhotos = async (searchText, page) => {
    this.setState({ loading: true });
    try {
      const data = await getImages(searchText, page);
      const limit = data.hits.length < !1 || data.hits.length >= 12;
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        isVisible: limit,
      }));
    } catch (error) {
      console.log('error:', error);
    } finally {
      this.setState({ loading: false });
    }
  };
  closeModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
    }));
  };
  componentDidUpdate(prevProps, prevState) {
    const { searchText, page } = this.state;
    if (prevState.searchText !== searchText || prevState.page !== page) {
      this.getPhotos(searchText, page);
    }
  }

  render() {
    const { loading, images, isVisible, showModal, id } = this.state;
    return (
      <div className={css.container}>
        <Searchbar onSubmit={this.handelSubmitForm} />
        {loading && <Loader />}
        <ImageGallery images={images} onClick={this.toggleModal} />
        {isVisible && <Button click={this.loadMore} />}
        {showModal && (
          <Modal images={images} id={id} onClose={this.closeModal} />
        )}
      </div>
    );
  }
}

export default App;
