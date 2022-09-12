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
      <>
          {expenses
            .map(({ id, value, description, currency, method, tag, exchangeRates }) => (
              <div className="result" key={ id }>
                <div className="resultt">
                  <h3>Descrição</h3>
                  {description}
                </div>
                <div className="resultt">
                  <h3>Tag</h3>
                  {tag}
                </div>
                <div className="resultt">
                  <h3>Método de pagamento</h3>
                  {method}
                </div>
                <div className="resultt">
                  <h3>Valor</h3>
                  {' '}
                  {Number(value).toFixed(2)}
                </div>
                <div className="resultt">
                  <h3>Moeda</h3>
                  {(exchangeRates[currency].name).split('/', 1)}
                </div>
                <div className="resultt">
                  <h3>Câmbio utilizado</h3>
                  {Number(exchangeRates[currency].ask).toFixed(2) }
                </div>
                <div className="resultt">
                  <h3>Valor convertido</h3>
                  {(exchangeRates[currency].ask * value).toFixed(2)}
                </div>
                <div className="resultt">
                  <h3>Moeda de conversão</h3>
                  Real
                </div>
                <div>
                  <button
                    className="resultt"
                    type="button"
                    id={ id }
                    data-testid="delete-btn"
                    onClick={ this.dispatchFunc }
                  >
                    Excluir
                  </button>
                </div>
              </div>))}
      </>

    );
  }
}

function mapStateToProps(state) {
  return {
    expenses: state.wallet.expenses,
  };
}

Table.propTypes = {
  expenses: PropTypes.sdiving,
  dispatch: PropTypes.func,
}.isRequired;

export default connect(mapStateToProps)(Table);
