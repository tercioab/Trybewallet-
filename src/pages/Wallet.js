import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <header>
          <div className="icon">
            <h1>$</h1>
          </div>
          <div>
            <h3>
              TrybeWallet
            </h3>
          </div>
          <Header />
        </header>
        <main>
          <WalletForm />
        </main>
      </div>
    );
  }
}

export default Wallet;
