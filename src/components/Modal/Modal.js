import React, { Component } from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEsc);
  }

  handleEsc = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  findImage = () => {
    const { images, id } = this.props;
    if (id) {
      return images.find(image => image.id === id);
    }
  };
  render() {
    const findImage = this.findImage();
    return (
      <div className={css.overlay} onClick={this.handleBackdropClick}>
        <div className={css.modal}>
          <img src={findImage.largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
Modal.propTypes = {
  images: PropTypes.array,
  id: PropTypes.number,
  onClose: PropTypes.func,
};

export default Modal;
