import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import OrganogramList from '../OrganogramList';
import './OrganogramListSet.scss';

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
  isDepth: PropTypes.bool,
};
const defaultProps = {
  list: [],
  isDepth: false,
};

class OrganogramListSet extends React.Component {
  render() {
    const {
      list,
    } = this.props;

    const listClassName = cx('OrganogramListSet', {
      OrganogramListSet__depth: this.props.isDepth,
    });

    return (
      <ul className={listClassName}>
        {list.map(item => (
          <OrganogramList
            key={item.id}
            item={item}
          />
        ))}
      </ul>
    );
  }
}

OrganogramListSet.propTypes = propTypes;
OrganogramListSet.defaultProps = defaultProps;

export default OrganogramListSet;
