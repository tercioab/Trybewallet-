import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchEconomia, expenses } from '../redux/actions';

class WalletForm extends Component {
  constructor() {
    super();
    this.state = {
      id: -1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: [],
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchEconomia());
  }

  onHandleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  requestApi = async () => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const currenciesapi = await response.json();
    delete currenciesapi.USDT;
    return currenciesapi;
  };

  clearInput = () => {
    this.setState({
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      exchangeRates: [],
    });
  };

  onHandleSubmit = async (e) => {
    e.preventDefault();
    const { id, exchangeRates } = this.state;
    this.setState({
      id: id + 1,
      exchangeRates: await this.requestApi(),
    }, () => {
      const { dispatch } = this.props;
      dispatch(expenses(this.state, exchangeRates));
      this.clearInput();
    });
  };

  render() {
    const { currenci } = this.props;
    const { method, value, description, currency, tag } = this.state;
    return (
      <form onSubmit={ this.onHandleSubmit } className="form-wallet">
        <label htmlFor="value-input">
          Valor:
          <input
            value={ value }
            name="value"
            onChange={ this.onHandleChange }
            id="value-input"
            placeholder="despesa"
            type="number"
            pla
            data-testid="value-input"
          />
        </label>
        <label
          htmlFor="moeda"
        >
          Moeda:
          <select
            value={ currency }
            name="currency"
            onChange={ this.onHandleChange }
            id="moeda"
            data-testid="currency-input"
          >
            {currenci.map((currencis, index) => (
              <option key={ index }>{currencis}</option>))}
          </select>
        </label>
        <label htmlFor="metodo">
          Método de pagamento:
          <select
            value={ method }
            name="method"
            onChange={ this.onHandleChange }
            id="metodo"
            data-testid="method-input"
          >
            <option
              value="Dinheiro"
            >
              Dinheiro
            </option>
            <option
              value="Cartão de crédito"
            >
              Cartão de crédito
            </option>
            <option
              value="Cartão de débito"
            >
              Cartão de débito

            </option>
          </select>
        </label>
        <label htmlFor="categoria">
          Categoria:
          <select
            value={ tag }
            name="tag"
            onChange={ this.onHandleChange }
            id="categoria"
            data-testid="tag-input"
          >
            <option>Alimentação</option>
            <option>Lazer</option>
            <option>Trabalho</option>
            <option>Transporte</option>
            <option>Saúde</option>
          </select>
        </label>
        <label htmlFor="description-input">
          Descrição:
          <input
            value={ description }
            name="description"
            onChange={ this.onHandleChange }
            id="description-input"
            placeholder="descrição"
            type="text"
            pla
            data-testid="description-input"
          />
        </label>
        <button type="submit">Adicionar Despesa</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currenci: state.wallet.currencies,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func,
  currenci: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default connect(mapStateToProps, null)(WalletForm);
