import {findAllByTestId, findByTestId, fireEvent, render, screen, waitFor} from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import {createMemoryHistory} from 'history'

import { Context } from '../contexts/Context';
import { Tasks } from '../pages/Tasks';

const initialState = {
  name: 'User',
  setName: (content: string) => null,
  tasks: [{id: '1', text: 'Task inicial', done: false}],
  setTasks: (content: string) => null,
  isLogged: false,
  setIsLogged: (content: boolean) => null,
}

const Provider = () => {
  return (
    <Context.Provider value={initialState}>
    <Tasks />
    </Context.Provider>
  );
}


const history = createMemoryHistory();
beforeEach(() => {
  history.push('/tasks');
});

describe('Testa a página Tasks', () => {
  test('Se é renderizado o nome do usuario na tela', () => {
    render(<Provider />);

    const nameEl = screen.getByText(/User/i);
    expect(nameEl).toBeInTheDocument();
  });

  test('Se é renderizado input para inserir uma nova tarefa', () => {
    render(<Provider />);

    const inputEl = screen.getByTestId('task-input');
    expect(inputEl).toBeInTheDocument();
  });
  
  test('Se o valor total de tasks inicial é igual a 1', () => {
    render(<Provider />)
    const taskLength = screen.getByTestId('task-lenght').innerHTML;
    expect(taskLength).toBe('Totais: 1');
  })

  test('Se a area das tasks possuem: checkbox, a task e os botoes de controle', () => {
    
    render(<Provider />)
    const checkboxEl = screen.getByTestId('checkbox');
    expect(checkboxEl).toBeInTheDocument();
    const initialTask = screen.getByText(/Task inicial/i);
    expect(initialTask).toBeInTheDocument();
    const btnControl = screen.getAllByTestId('btn-control');
    expect(btnControl.length).toBe(1);
  })

  test('Se ao digitar uma nova tarefa e pressionar Enter a tarefa aparece na lista', async () => {
    render(<Provider />);
    const doneBtn = screen.getByTestId('donebtn');
    expect(doneBtn).toBeInTheDocument();
    userEvent.click(screen.getByTestId('addbtn'));
  });
  
})