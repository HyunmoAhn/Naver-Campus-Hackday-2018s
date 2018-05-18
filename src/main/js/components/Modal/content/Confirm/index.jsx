import React from 'react';
import PropTypes from 'prop-types';
import './Confirm.scss';

const propTypes = {
  cancelText: PropTypes.string,
  confirmText: PropTypes.string,
  content: PropTypes.string,
  title: PropTypes.string,
  onConfirm: PropTypes.func,
  onModalClose: PropTypes.func,
};
const defaultProps = {
  cancelText: 'Cancel',
  confirmText: 'OK',
  content: '',
  title: '',
  onConfirm() {},
  onModalClose() {},
};

class Confirm extends React.Component {
  constructor(props) {
    super(props);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleConfirm() {
    this.props.onConfirm();
    this.props.onModalClose();
  }

  render() {
    const {
      cancelText,
      confirmText,
      content,
      title,
      onModalClose,
    } = this.props;

    return (
      <div className="Confirm">
        <h6 className="Confirm__title space-2x"><strong>{title}</strong></h6>
        <span
          className="Confirm__content space-4x"
        >
          {content.split('\n').map((line, index) => (
            <span key={index}>{line}<br /></span> // eslint-disable-line react/no-array-index-key
          ))}
        </span>
        <div className="Confirm__btn-box">
          <button
            type="button"
            className="Btn Btn--gray Btn--sm"
            onClick={onModalClose}
          >
            {cancelText}
          </button>
          <button
            type="button"
            className="Btn Btn--primary Btn--sm Confirm__btn"
            onClick={this.handleConfirm}
          >
            {confirmText}
          </button>
        </div>
      </div>
    );
  }
}

Confirm.propTypes = propTypes;
Confirm.defaultProps = defaultProps;

export default Confirm;
