import { useState, useEffect } from 'react';
import css from './App.module.css';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import getImages from '../../service/Api';
import Modal from '../Modal/Modal';
import Loader from '../Loader/Loader';

const App = () => {
  const [images, setImages] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState('');

  useEffect(() => {
    getPhotos(searchText, page);
  }, [searchText, page]);

  const getPhotos = async (searchText, page) => {
    setLoading(true);
    try {
      const data = await getImages(searchText, page);
      const limit = data.hits.length < !1 || data.hits.length >= 12;
      setImages(prevState => [...prevState, ...data.hits]);
      setIsVisible(limit);
    } catch (error) {
      console.log('error:', error);
    } finally {
      setLoading(false);
    }
  };
  const toggleModal = id => {
    setShowModal(!showModal);
    setId(id);
  };
  const handelSubmitForm = text => {
    setSearchText(text);
    setPage(1);
    setIsVisible(false);
    setImages([]);
  };
  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };
  const closeModal = () => {
    setShowModal(!showModal);
  };
  return (
    <div className={css.container}>
      <Searchbar onSubmit={handelSubmitForm} />
      {loading && <Loader />}
      <ImageGallery images={images} onClick={toggleModal} />
      {isVisible && <Button click={loadMore} />}
      {showModal && <Modal images={images} id={id} onClose={closeModal} />}
    </div>
  );
};

export default App;
