import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWthRouterAndRedux from './helpers/renderWith';
import App from '../App';

describe('Teste componente "Login.js"', () => {
  test('Verifica se existe o nome trybewallet', () => {
    renderWthRouterAndRedux(<App />);
    const login = screen.getByRole('heading', { name: /trybewallet/i });
    expect(login).toBeInTheDocument();
  });

  test('Verifica se existe o campo de email', () => {
    renderWthRouterAndRedux(<App />);
    const email = screen.getByRole('textbox', { type: /email/i });
    expect(email).toBeInTheDocument();
  });

  test('Verifica se existe o botão de entrar', () => {
    renderWthRouterAndRedux(<App />);
    const btn = screen.getByRole('button', { name: /entrar/i });
    expect(btn).toBeInTheDocument();
  });

  test('Verifica se existe o campo de senha', () => {
    renderWthRouterAndRedux(<App />);
    const password = screen.getByText(/senha/i);
    expect(password).toBeInTheDocument();
  });
});
