import React, { Component } from 'react';
import { connect } from 'react-redux';

class WalletForm extends Component {
  teste = () => {
    console.log(fet('mnmn'));
  };

  render() {
    return (
      <div>
        <label htmlFor="value-input">
          DESPESA
          <input
            id="value-input"
            placeholder="despesa"
            type="number"
            pla
            data-testid="value-input"
          />
        </label>
        <label htmlFor="description-input">
          DESCRIÇÃO
          <input
            id="description-input"
            placeholder="descrição"
            type="text"
            pla
            data-testid="description-input"
          />
        </label>
        <button
          type="button"
          onClick={ this.teste }
        >
          teste

        </button>
      </div>
    );
  }
}

export default connect()(WalletForm);
