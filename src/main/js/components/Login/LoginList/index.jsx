import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }),
  onLogin: PropTypes.func,
};
const defaultProps = {
  className: '',
  item: {},
  onLogin() {},
};

class LoginList extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    window.localStorage.setItem('userId', this.props.item.id);
    window.location.replace('/'); // todo 새로고침을 시키는 것이 아니라 model을 변경시킴으로써 route를 새로고침 할 것
    this.props.onLogin(this.props.item.id);
  }

  render() {
    const { className, item } = this.props;

    return (
      <li // eslint-disable-line
        className={className}
        onClick={this.handleLogin}
      >
        {item.name}
      </li>
    );
  }
}

LoginList.propTypes = propTypes;
LoginList.defaultProps = defaultProps;

export default LoginList;
