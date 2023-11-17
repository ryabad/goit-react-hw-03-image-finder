import { Component } from 'react';

import css from './Modal.module.css';

class Modal extends Component {
  handleESC = e => {
    if (e.code === 'Escape') {
      this.props.close();
    }
  };

  handleClick = e => {
    if (e.target === e.currentTarget) {
      this.props.close();
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleESC);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleESC);
  }

  render() {
    const { baseImg, alt } = this.props;

    return (
      <div className={css.overlay} onClick={this.handleClick}>
        <div className={css.modal}>
          <img src={baseImg} alt={alt} />
        </div>
      </div>
    );
  }
}

export default Modal;
