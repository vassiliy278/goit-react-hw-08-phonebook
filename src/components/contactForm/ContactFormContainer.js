import { connect } from 'react-redux';
import ContactForm from './ContactForm';

const mapStateToProps = state => ({
  state,
});

export default connect(mapStateToProps)(ContactForm);
