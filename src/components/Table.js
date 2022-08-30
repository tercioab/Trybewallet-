import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { delet } from '../redux/actions';

class Table extends Component {
  filter = (target) => {
    const { expenses } = this.props;
    return expenses.filter(({ id }) => id !== Number(target.id));
  };

  dispatchFunc = ({ target }) => {
    const { dispatch } = this.props;
    dispatch(delet(this.filter(target)));
  };

  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr className="description">
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses
            .map(({ id, value, description, currency, method, tag, exchangeRates }) => (
              <tr className="result" key={ id }>
                <td>{description}</td>
                <td>{tag}</td>
                <td>{method}</td>
                <td>
                  {' '}
                  {Number(value).toFixed(2)}
                </td>
                <td>{(exchangeRates[currency].name)}</td>
                <td>{Number(exchangeRates[currency].ask).toFixed(2) }</td>
                <td>{(exchangeRates[currency].ask * value).toFixed(2)}</td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    id={ id }
                    data-testid="delete-btn"
                    onClick={ this.dispatchFunc }
                  >
                    Excluir
                  </button>
                </td>
              </tr>))}
        </tbody>
      </table>

    );
  }
}

function mapStateToProps(state) {
  return {
    expenses: state.wallet.expenses,
  };
}

Table.propTypes = {
  expenses: PropTypes.string,
  dispatch: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(Table);
