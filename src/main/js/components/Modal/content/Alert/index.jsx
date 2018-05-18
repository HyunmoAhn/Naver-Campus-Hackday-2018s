import React from 'react';
import PropTypes from 'prop-types';
import './Alert.scss';

const propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  closeText: PropTypes.string,
  onModalClose: PropTypes.func.isRequired,
};
const defaultProps = {
  title: '',
  content: '',
  closeText: 'OK',
};

function Alert(props) {
  const {
    title,
    content,
    closeText,
    onModalClose,
  } = props;

  return (
    <div className="Alert">
      <h6 className="Alert__title space-2x"><strong>{title}</strong></h6>
      <span
        className="Alert__content space-4x"
      >
        {content.split('\n').map((line, index) => (
          <span key={index}>{line}<br /></span> // eslint-disable-line react/no-array-index-key
        ))}
      </span>
      <div className="Alert__btn-box">
        <button
          type="button"
          className="Btn Btn--primary Btn--sm"
          onClick={onModalClose}
        >
          {closeText}
        </button>
      </div>
    </div>
  );
}

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default Alert;
