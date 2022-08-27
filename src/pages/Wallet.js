import React from 'react';
import Header from '../components/Header';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        TrybeWallet
        <header>
          <Header />
        </header>
        <main>
          <WalletForm />
        </main>
        <footer>
          footer
        </footer>
      </div>
    );
  }
}

export default Wallet;
