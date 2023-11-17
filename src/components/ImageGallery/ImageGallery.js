import ImageGalleryItem from './ImageGalleryItem';
import css from './ImageGallery.module.css';

const ImageGallery = ({ data }) => {
  return (
    <ul className={css.gallery}>
      {data.map(el => (
        <ImageGalleryItem
          key={el.id}
          webformatURL={el.webformatURL}
          largeImageURL={el.largeImageURL}
          alt={el.tags}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
