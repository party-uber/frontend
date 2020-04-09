import React from "react";
import {
  Button,
  FormGroup,
  FormControl,
  FormLabel,
  Alert
} from "react-bootstrap";
import "../css/Register.css";
import { Link } from "react-router-dom";
import { authActions } from "../actions/Auth-actions";
import { connect } from "react-redux";

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      passwordCheck: "",
      firstName: "",
      lastName: "",
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });
    const { email, password, firstName, lastName } = this.state;
    if (email && password && firstName && lastName) {
      this.props.register(email, password, firstName, lastName);
    }
  }

  passwordMatch() {
    const {password, passwordCheck} = this.state;
    return passwordCheck !== password && passwordCheck !== "" && password !== "";
  }

  componentDidUpdate() {
    if (this.props.loggedIn) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    const { email, password, passwordCheck, firstName, lastName } = this.state;

    return (
      <div className="Register">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="firstName" size="lg">
            <FormLabel>First Name</FormLabel>
            <FormControl
              autoFocus
              type="text"
              name="firstName"
              value={firstName}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="lastName" size="lg">
            <FormLabel>Last Name</FormLabel>
            <FormControl
              type="text"
              name="lastName"
              value={lastName}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="email" size="lg">
            <FormLabel>Email</FormLabel>
            <FormControl
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" size="lg">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={password}
              name="password"
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <FormGroup controlId="passwordCheck" size="lg">
            <FormLabel>Confirm Password</FormLabel>
            <FormControl
              value={passwordCheck}
              name="passwordCheck"
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <FormGroup>
            <Button block size="lg" variant="danger" type="submit">
              Register
            </Button>
          </FormGroup>
          <FormGroup hidden={!this.passwordMatch()}>
            <Alert variant="danger">Passwords dont match</Alert>
          </FormGroup>
          <Link to="/">Already have an account? Login</Link>
        </form>
      </div>
    );
  }
}

const mapState = state => {
  return {
    loggedIn: state.auth.isAuthenticated
  };
};

const actionCreators = {
  register: authActions.register
};

const connectedRegisterPage = connect(mapState, actionCreators)(Register);
export { connectedRegisterPage as Register };
