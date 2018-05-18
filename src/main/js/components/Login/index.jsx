import React from 'react';
import PropTypes from 'prop-types';
import LoginList from './LoginList';
import './Login.scss';

const propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })),
  onUserListFetch: PropTypes.func,
  onLogin: PropTypes.func,
};
const defaultProps = {
  users: [],
  onUserListFetch() {},
  onLogin() {},
};

class Login extends React.Component {
  componentDidMount() {
    this.props.onUserListFetch();
  }

  render() {
    const { users, onLogin } = this.props;

    return (
      <ul className="Login__user-set">
        <h4 className="Login__user-title">유저 리스트</h4>
        {users.map(user => (
          <LoginList // eslint-disable-line
            className="Login__user"
            key={user.id}
            item={user}
            onLogin={onLogin}
          >
            {user.name}
          </LoginList>
        ))}
      </ul>
    );
  }
}

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

export default Login;
