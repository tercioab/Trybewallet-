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
        <tbody>
          {expenses
            .map(({ id, value, description, currency, method, tag, exchangeRates }) => (
              <tr className="result" key={ id }>
                <td className="t1">
                  <h3>Descrição</h3>
                  {description}
                </td>
                <td className="t2">
                  <h3>Tag</h3>
                  {tag}
                </td>
                <td className="t3">
                  <h3>Método de pagamento</h3>
                  {method}
                </td>
                <td className="t4">
                  <h3>Valor</h3>
                  {' '}
                  {Number(value).toFixed(2)}
                </td>
                <td className="t5">
                  <h3>Moeda</h3>
                  {(exchangeRates[currency].name).split('/', 1)}
                </td>
                <td className="t6">
                  <h3>Câmbio utilizado</h3>
                  {Number(exchangeRates[currency].ask).toFixed(2) }
                </td>
                <td className="t7">
                  <h3>Valor convertido</h3>
                  {(exchangeRates[currency].ask * value).toFixed(2)}
                </td>
                <td className="t8">
                  <h3>Moeda de conversão</h3>
                  Real
                </td>
                <td>
                  <button
                    className="t9"
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
