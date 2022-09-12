import React from "react";
import Header from "../components/Header";
import Table from "../components/Table";
import WalletForm from "../components/WalletForm";

class Wallet extends React.Component {
	render() {
		return (
			<body className='geral-wallet'>
				<header className='trybewallet-div'>
					<h3 className='trybeWallet'>MyWallet</h3>
					<Header />
				</header>
				<main>
					<WalletForm />
					<Table />
				</main>
			</body>
		);
	}
}

export default Wallet;
