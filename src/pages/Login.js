import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { userAction } from '../redux/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      btnActive: true,
    };
  }

  validbutton = () => {
    const { email, password } = this.state;
    const number = 5;
    const validEmail = (/\S+@\S+\.\S+/.test(email));
    return !validEmail || password.length < number;
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
      btnActive: this.validbutton(),
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email } = this.state;
    const { dispatch } = this.props;
    dispatch(userAction(email));
    const { history } = this.props;
    history.push('/carteira');
    console.log('teste');
  };

  render() {
    const { password, email, btnActive } = this.state;
    return (
      <div className="login-div">
        <form className='login-form' onSubmit={ this.handleSubmit }>
          <h2>TrybeWallet</h2>
          <label htmlFor="email-input">
            email
            <input
              data-testid="email-input"
              type="email"
              name="email"
              value={ email }
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password-input">
            senha
            <input
              data-testid="password-input"
              type="password"
              name="password"
              value={ password }
              onChange={ this.handleChange }
            />
          </label>
          <button
            disabled={ btnActive }
            type="submit"
          >
            Entrar
          </button>
        </form>
      </div>

    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(Login);
