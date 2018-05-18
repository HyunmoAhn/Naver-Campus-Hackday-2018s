import { connect } from 'react-redux';
import Login from 'components/Login';
import {
  loginAuthorizeSuccess,
  userFetch,
} from 'store/login/actions';
import { getUserListSelector } from 'store/login/selectors';

const mapStateToProps = state => ({
  users: getUserListSelector(state),
});
const mapDispatchToProps = {
  onLogin: loginAuthorizeSuccess,
  onUserListFetch: userFetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
