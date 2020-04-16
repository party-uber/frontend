import React from 'react';
import { authActions } from "../actions/Auth-actions";
import { connect } from "react-redux";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "../css/Login.css"

class Login extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      email: "",
      password: "",
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
    const { email, password } = this.state;
    if (email && password) {
      this.props.login(email, password);
    }
  }

  componentDidUpdate() {
    if (this.props.loggedIn) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    const { email, password } = this.state;

    return (
      <div className="Login">
        <form name="form" onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" size="lg">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              name="email"
              onChange={this.handleChange}
              value={email}
            />
          </FormGroup>
          <FormGroup controlId="password" size="lg">
            <FormLabel>Password</FormLabel>
            <FormControl
              onChange={this.handleChange}
              type="password"
              name="password"
              value={password}
            />
          </FormGroup>
          <Button
            block
            size="lg"
            variant="danger"
            type="submit"
          >
            Login
          </Button>
          <Link to="/register">No account yet? Register</Link>
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
  login: authActions.login
};

const connectedLoginPage = connect(mapState, actionCreators)(Login);
export { connectedLoginPage as Login };
