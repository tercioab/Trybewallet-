import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchEconomia from '../redux/actions';

class WalletForm extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchEconomia());
  }

  render() {
    const { currencies } = this.props;
    return (
      <form className="form-wallet">
        <label htmlFor="value-input">
          Valor:
          <input
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
          <select id="moeda" data-testid="currency-input">
            {currencies.map((currenci, index) => (
              <option key={ index }>{currenci}</option>))}
          </select>
        </label>
        <label htmlFor="metodo">
          Método de pagamento:
          <select id="metodo" data-testid="method-input">
            <option>Dinheiro</option>
            <option>Cartão de crédito</option>
            <option>Cartão de débito</option>
          </select>
        </label>
        <label htmlFor="categoria">
          Categoria:
          <select id="categoria" data-testid="tag-input">
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
            id="description-input"
            placeholder="descrição"
            type="text"
            pla
            data-testid="description-input"
          />
        </label>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

WalletForm.propTypes = {
  dispatch: PropTypes.func,
  currencies: PropTypes.arrayOf(PropTypes.string),
}.isRequired;

export default connect(mapStateToProps, null)(WalletForm);
