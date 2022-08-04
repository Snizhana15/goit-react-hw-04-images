import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ id, image, onClick }) => {
  return (
    <li className={css.galleryItem} key={id} onClick={() => onClick(id)}>
      <img src={image} alt="" className={css.image} />
    </li>
  );
};
ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  onClick: PropTypes.func,
};

export default ImageGalleryItem;
