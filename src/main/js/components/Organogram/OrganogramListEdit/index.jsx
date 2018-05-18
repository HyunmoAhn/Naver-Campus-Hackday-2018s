import React from 'react';
import PropTypes from 'prop-types';
import * as STATUS from 'constants/STATUS';
import './OrganogramListEdit.scss';

const propTypes = {
  className: PropTypes.string,
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    spread: PropTypes.bool,
  }),
  onCancel: PropTypes.func,
  onAddOrg: PropTypes.func,
  onEditOrg: PropTypes.func,
};
const defaultProps = {
  className: '',
  item: {},
  onCancel() {},
  onAddOrg() {},
  onEditOrg() {},
};

class OrganogramListEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.item.name,
    };
    this.inputRef = React.createRef();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  handleInputChange(e) {
    this.setState({ value: e.target.value });
  }

  handleCancel() {
    const { item, onCancel } = this.props;

    onCancel({ id: item.id, status: STATUS.VIEW });
  }

  handleConfirm(e) {
    e.preventDefault();
    const { item, onAddOrg, onEditOrg } = this.props;

    if (!this.state.value.trim()) {
      this.handleCancel();
    } else if (item.id === 0) {
      onAddOrg(this.state.value);
      this.handleCancel();
    } else {
      onEditOrg({ id: item.id, value: this.state.value });
      this.handleCancel();
    }
  }

  render() {
    const { className } = this.props;
    return (
      <li className="OrganogramList">
        <button
          className="OrganogramList__spread-btn"
        >
          <i className={className} />
        </button>
        <input
          className="OrganogramListEdit__input InputSet InputSet__text-input"
          type="text"
          ref={this.inputRef}
          value={this.state.value}
          onChange={this.handleInputChange}
          onBlur={this.handleCancel}
        />
        <button
          className="OrganogramList__confirm-btn Btn Btn--white"
          onMouseDown={this.handleConfirm}
        >
          확인
        </button>
        <button
          className="OrganogramList__cancel-btn Btn Btn--white"
          onClick={this.handleCancel}
        >
          취소
        </button>
      </li>
    );
  }
}

OrganogramListEdit.propTypes = propTypes;
OrganogramListEdit.defaultProps = defaultProps;

export default OrganogramListEdit;
