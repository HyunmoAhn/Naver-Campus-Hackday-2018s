import { createActions } from 'redux-actions';
import * as TYPES from '../actionTypes';

export const {
  modalOpen,
  modalClose,
} = createActions(
  {
    [TYPES.MODAL_OPEN]: (modalType, modalProps) => ({
      modalType,
      modalProps,
    }),
  },
  TYPES.MODAL_CLOSE,
);
