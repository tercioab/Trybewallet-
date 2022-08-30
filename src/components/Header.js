import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  sum = ({ expenses } = this.props) => {
    let initialValue = 0;
    expenses.forEach((expense) => {
      const { currency } = expense;
      const typeCoin = currency;
      const expenseValue = expense.value;
      const askValue = expense.exchangeRates[typeCoin].ask;
      initialValue += expenseValue * askValue;
    });
    return initialValue.toFixed(2);
  };

  render() {
    const { email } = this.props;

    return (
      <div className="header-infos">
        <h5 className="email" data-testid="email-field">
          {email}
        </h5>
        <h5 className="total" data-testid="total-field">{this.sum()}</h5>
        <h5 className="brl" data-testid="header-currency-field">BRL</h5>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    email: state.user.email,
    expenses: state.wallet.expenses,
  };
}

Header.propTypes = {
  email: PropTypes.string,
  wallet: PropTypes.string,

}.isRequired;

export default connect(mapStateToProps)(Header);
