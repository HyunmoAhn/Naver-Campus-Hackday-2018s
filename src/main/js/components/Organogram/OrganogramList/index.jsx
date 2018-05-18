import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import * as STATUS from 'constants/STATUS';
import OrganogramListEditContainer from 'containers/OrganogramListEditContainer';
import OrganogramListSet from '../OrganogramListSet';
import './OrganogramList.scss';

const propTypes = {
  item: PropTypes.shape({
    children: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      spread: PropTypes.bool,
      children: PropTypes.array // eslint-disable-line
    })),
    id: PropTypes.number,
    name: PropTypes.string,
    status: PropTypes.string,
  }),
};
const defaultProps = {
  item: {},
};

class OrganogramList extends React.Component {
  render() {
    const {
      item,
    } = this.props;
    const folderClassName = cx('fas', {
      'fa-folder': !item.spread,
      'fa-folder-open': item.spread,
    });
    const listClassName = cx('OrganogramList');

    return [
      item.status === STATUS.VIEW ? (
        <div // eslint-disable-line
          key="parent"
        >
          <li // eslint-disable-line
            className={listClassName}
          >
            <button // eslint-disable-line jsx-a11y/mouse-events-have-key-events
              className="OrganogramList__spread-btn"
            >
              <i className={folderClassName} />
            </button>
            {item.name}
            <button
              className="OrganogramList__edit-btn Btn Btn--white"
            >
              수정
            </button>
            <button className="OrganogramList__delete-btn Btn Btn--white">삭제</button>
          </li>
        </div>
      ) : (
        <OrganogramListEditContainer
          className={folderClassName}
          item={item}
          key="edit"
        />
      ),
      item.children && (
        <OrganogramListSet
          key="child"
          list={item.children}
          isDepth
        />
      ),
    ];
  }
}

OrganogramList.propTypes = propTypes;
OrganogramList.defaultProps = defaultProps;

export default OrganogramList;
