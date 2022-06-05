import { render, screen } from "@testing-library/react";
import { Login } from '../pages/Login';
import {Router} from 'react-router-dom'
import {createMemoryHistory} from 'history'
import userEvent from "@testing-library/user-event";

const history = createMemoryHistory()
afterEach(() => {
  history.push('/');
});

describe('Testa o Login', () => {
  test('Se existe um input para o nome e o botão para entrar', () => {
    render(
      <Router location={ history.location } navigator={history}>
        <Login />
      </Router>,
    );

    const inputEl = screen.getByPlaceholderText(/digite seu nome para entrar/i);
    const buttonEl = screen.getByRole('button');
    expect(inputEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
  });

  test('Se ao digitar um nome e clicar no botao a pagina é redirecionada para /tasks', () => {
    render(
      <Router location={ history.location } navigator={history}>
        <Login />
      </Router>,
    );
    
    const inputEl = screen.getByPlaceholderText(/digite seu nome para entrar/i);
    const buttonEl = screen.getByRole('button');
    userEvent.type(inputEl, 'usuario');
    userEvent.click(buttonEl);

    expect(history.location.pathname).toBe('/tasks');
  });

  test('Se uma mensagem de erro é exibida ao deixar o input vazio', () => {
    render(
      <Router location={history.location} navigator={history}>
        <Login />
      </Router>,
    );
    
    const inputEl = screen.getByPlaceholderText(/digite seu nome para entrar/i);
    userEvent.type(inputEl, '');
    const buttonEl = screen.getByRole('button');
    userEvent.click(buttonEl);
    const alertEl = screen.getByText(/Voce precisa inserir um nome/i);
    expect(alertEl).toBeInTheDocument();
  });
})