import { connect } from 'react-redux';
import Modal from 'components/Modal';
import { modalClose } from 'store/modal/actions';
import {
  modalPropsSelector,
  modalTypeSelector,
} from 'store/modal/selectors';

const mapStateToProps = state => ({
  modalProps: modalPropsSelector(state),
  modalType: modalTypeSelector(state),
});

const mapDispatchToProps = {
  onModalClose: modalClose,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
