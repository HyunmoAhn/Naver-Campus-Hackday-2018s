import React from 'react';
import PropTypes from 'prop-types';
import * as STATUS from 'constants/STATUS';
import OrganogramListSet from './OrganogramListSet';
import './Organogram.scss';

const propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    children: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      spread: PropTypes.bool,
      children: PropTypes.array // eslint-disable-line
    })),
    id: PropTypes.number,
    name: PropTypes.string,
    spread: PropTypes.bool,
  })),
  onListFetch: PropTypes.func,
  onAddOrg: PropTypes.func,
};
const defaultProps = {
  list: [],
  onListFetch() {},
  onAddOrg() {},
};

class Organogram extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOrg = this.handleAddOrg.bind(this);
  }
  componentDidMount() {
    this.props.onListFetch();
  }

  handleAddOrg() {
    this.props.onAddOrg({
      id: 0,
      status: STATUS.EDIT,
    });
  }

  render() {
    const {
      list,
    } = this.props;

    return (
      <div className="Organogarm" key="Organogram">
        <h3 className="Organogarm__title">회사 조직도</h3>
        <button
          className="Btn Btn--white Organogram__Btn--add"
          onClick={this.handleAddOrg}
        >
          조직 추가
        </button>
        <div className="Organogram__list">
          <OrganogramListSet list={list} />
        </div>
      </div>
    );
  }
}

Organogram.propTypes = propTypes;
Organogram.defaultProps = defaultProps;

export default Organogram;
