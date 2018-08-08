import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import Navbar from "./navbar";

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProp
)(Navbar);
