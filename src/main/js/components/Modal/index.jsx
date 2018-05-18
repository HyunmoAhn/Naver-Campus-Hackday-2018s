import React from 'react';
import PropTypes from 'prop-types';
import ReactModal from 'react-modal';
import * as MODAL from 'constants/MODAL_TYPE';
import Alert from './content/Alert';
import Confirm from './content/Confirm';
import './Modal.scss';

const propTypes = {
  modalType: PropTypes.string,
  modalProps: PropTypes.object, // eslint-disable-line
  onModalClose: PropTypes.func,
};

const defaultProps = {
  modalType: '',
  modalProps: {},
  onModalClose() {},
};

const content = {
  [MODAL.ALERT]: Alert,
  [MODAL.CONFIRM]: Confirm,
};

class Modal extends React.Component {
  render() {
    const { modalType, modalProps, onModalClose } = this.props;
    const isOpen = !!modalType;
    const Content = content[modalType];

    if (!isOpen) {
      return null;
    }

    return (
      <ReactModal
        className="Modal__container"
        overlayClassName="Modal__overlay"
        contentLabel="Modal"
        isOpen={isOpen}
        ariaHideApp={false}
      >
        {<Content {...modalProps.toJS()} onModalClose={onModalClose} />}
      </ReactModal>
    );
  }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
