import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  render() {
    const { user, wallet } = this.props;
    return (
      <div className="header-infos">
        <h4 data-testid="email-field">{user.email}</h4>
        <h4 data-testid="total-field">{wallet.idToEdit}</h4>
        <h4 data-testid="header-currency-field">BRL</h4>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    wallet: state.wallet,
  };
}

Header.propTypes = {
  user: PropTypes.string,
  wallet: PropTypes.string,

}.isRequired;

export default connect(mapStateToProps)(Header);
