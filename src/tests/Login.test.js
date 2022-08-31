import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWthRouterAndRedux from './helpers/renderWith';
import App from '../App';

describe('Teste componente "Login.js"', () => {
  test('Verifica se ao entrar a rota está correta', () => {
    const { history } = renderWthRouterAndRedux(<App />);
    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    userEvent.type(email, 'suaagenciainicial@email.com');
    userEvent.type(password, '123456');
    const btn = screen.getByText('Entrar');
    userEvent.click(btn);
    const { pathname } = history.location;
    expect(pathname).toBe('/carteira');
  });
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

  test('Verifica se os inputs são validados', () => {
    renderWthRouterAndRedux(<App />);
    const email = screen.getByTestId('email-input');
    const password = screen.getByTestId('password-input');
    const btn = screen.getByText('Entrar');
    userEvent.type(email, 'email');
    userEvent.type(password, '12345');
    expect(btn).toHaveAttribute('disabled');
    userEvent.type(email, 'suaagenciainicial@email.com');
    userEvent.type(password, '123456');
    expect(btn).not.toHaveAttribute('disabled');
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
