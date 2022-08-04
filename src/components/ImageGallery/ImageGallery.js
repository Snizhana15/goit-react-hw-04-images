import React from 'react';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={css.gallery}>
      {images.map(({ id, webformatURL }) => (
        <ImageGalleryItem
          id={id}
          image={webformatURL}
          onClick={onClick}
          data-id={id}
        />
      ))}
    </ul>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.array,
  onClick: PropTypes.func,
};

export default ImageGallery;
