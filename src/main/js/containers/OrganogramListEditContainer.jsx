import { connect } from 'react-redux';
import OrganogramListEdit from 'components/Organogram/OrganogramListEdit';
import {
  organogramStatusChange,
  organogramAdd,
} from 'store/organogram/actions';

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  onCancel: organogramStatusChange,
  onAddOrg: organogramAdd,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrganogramListEdit);

