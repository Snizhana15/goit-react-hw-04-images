import { useEffect } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ images, id, onClose }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  });
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  const handleEsc = evt => {
    if (evt.code === 'Escape') {
      onClose();
    }
  };
  const findImage = () => {
    if (id) {
      return images.find(image => image.id === id);
    }
  };
  const image = findImage();
  return (
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <img src={image.largeImageURL} alt="" />
      </div>
    </div>
  );
};
Modal.propTypes = {
  images: PropTypes.array,
  id: PropTypes.number,
  onClose: PropTypes.func,
};

export default Modal;
