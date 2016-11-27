import {connect} from 'react-redux';
import Filter from './filter';
import { addFilter, removeFilter } from '../../actions/filter_actions';


const mapStateToProps = state => ({
  filters: state.filters
});

const mapDispatchToProps = dispatch => ({
  addFilter: filter => dispatch(addFilter(filter)),
  removeFilter: filter => dispatch(removeFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
