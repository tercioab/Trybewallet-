import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  sum = ({ expenses } = this.props) => {
    let sumValues = 0;
    expenses.forEach((expense) => {
      const { currency } = expense;
      const valid = currency || 'USD';
      const expenseValue = expense.value;
      const askValue = expense.exchangeRates[valid].ask;
      sumValues += expenseValue * askValue;
    });
    return sumValues.toFixed(2);
  };

  render() {
    const { user } = this.props;

    return (
      <div className="header-infos">
        <h4 data-testid="email-field">
          {user.email}
        </h4>
        <h4 data-testid="total-field">{this.sum()}</h4>
        <h4 data-testid="header-currency-field">BRL</h4>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    expenses: state.wallet.expenses,
  };
}

Header.propTypes = {
  user: PropTypes.string,
  wallet: PropTypes.string,

}.isRequired;

export default connect(mapStateToProps)(Header);
