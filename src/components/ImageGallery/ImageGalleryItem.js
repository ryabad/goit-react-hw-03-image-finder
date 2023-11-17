import { Component } from 'react';
import css from './ImageGallery.module.css';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    isShowModal: false,
  };

  handleOpen = () => {
    this.setState({ isShowModal: true });
  };

  handleClose = () => {
    this.setState({ isShowModal: false });
  };

  render() {
    const { webformatURL, largeImageURL, alt } = this.props;
    const { isShowModal } = this.state;

    return (
      <li className={css.galleryItem}>
        <img
          src={webformatURL}
          alt={alt}
          className={css.galleryItemImage}
          onClick={this.handleOpen}
        />
        {isShowModal && (
          <Modal baseImg={largeImageURL} alt={alt} close={this.handleClose} />
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;
