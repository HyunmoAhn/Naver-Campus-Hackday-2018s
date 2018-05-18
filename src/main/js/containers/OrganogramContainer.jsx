import { connect } from 'react-redux';
import Organogram from 'components/Organogram';
import {
  organogramFetch,
  organogramStatusChange,
} from 'store/organogram/actions';
import { getOrganogramListRecur } from 'store/organogram/selectors';

const mapStateToProps = state => ({
  list: getOrganogramListRecur(state),
});

const mapDispatchToProps = {
  onAddOrg: organogramStatusChange,
  onListFetch: organogramFetch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Organogram);
