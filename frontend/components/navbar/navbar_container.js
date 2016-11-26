import {connect} from 'react-redux';
import NavBar from './navbar';

const mapStateToProps = state => ({
  title: state.products.pageTitle
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
