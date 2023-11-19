import css from './Button.module.css';

const Button = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={css.buttonLoad}
      id="loadMoreButton"
    >
      Load More
    </button>
  );
};

export default Button;
