import * as C from './styled';
import React, { KeyboardEvent, useContext, useEffect, useState } from 'react';
import { Context } from '../../contexts/Context';
import { MdNoteAdd } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';
import  { TasksTypes } from '../../types/TasksTypes';
import {Button} from '../../components/Button';
import { Link } from 'react-router-dom';

export const Tasks = () => {
  const [inputTask, setInputTask] = useState('');

  const { name, tasks, setTasks } = useContext(Context);

  useEffect(() => {
    const currentLocalStorage = localStorage.getItem('tasks');
    if( typeof currentLocalStorage === 'string') {
      setTasks(JSON.parse(currentLocalStorage));  
    }
  },[]);

  const addNewTask = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      const newTask: TasksTypes = { id: uuidv4(), text: inputTask, done: false };
      setTasks([...tasks, newTask]);
      setInputTask('');
    }
  }
  
  const addNewTaskClick = () => {
      const newTask: TasksTypes = { id: uuidv4(), text: inputTask, done: false };
      setTasks([...tasks, newTask]);
      setInputTask('');
  }

  const doneTask = (id: string) => {
    const editTasks = [...tasks];
    editTasks.forEach((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
    });
    setTasks(editTasks);
  }

  const deleteTask = (id: string) => {
    const filteredTask = tasks.filter((task) => task.id !== id);
    setTasks(filteredTask);
  }

  const saveTasks = () => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  return (
      <C.Container>
         { name === '' && 
          <div className='login-msg'>
            <h2>Voce não esta logado</h2>
            <Link to="/">Fazer login</Link>
          </div>
         }

         { name !== '' &&
          <React.Fragment>
             <C.Header>
            <C.UserName>
              Usuario: { name }
            </C.UserName>
            <C.TasksInfo>
              <p data-testid="task-lenght">Totais: {tasks.length}</p>
              <p>Concluídas: {tasks.filter((task) => task.done === true).length} </p>
              <p>Pendentes: {tasks.filter((task) => task.done === false).length}</p>
            </C.TasksInfo>
          </C.Header>

          <C.TaskInputArea>
            <C.Input
              onChange={(e) => setInputTask(e.target.value)}
              data-testid="task-input"
              value={inputTask}
              onKeyUp={addNewTask}
            />
            <C.Icon>
              <MdNoteAdd
                size="3rem"
                onClick={addNewTaskClick}
                data-testid="addbtn"
              />
            </C.Icon>
          </C.TaskInputArea>

          <C.TasksContentArea>
            { tasks.length > 0 && (
              tasks.map((task) => (
                <C.TaskArea key={task.id}>
                  <C.DoneButton
                    type="checkbox"
                    onChange={() => doneTask(task.id)}
                    checked={task.done}
                    data-testid="checkbox"
                  />
                  <C.TaskText data-testid="donebtn" done={task.done}>{task.text}</C.TaskText>
                  <C.TaskButtons>
                    <p onClick={() => deleteTask(task.id)}  data-testid='btn-control'>❌</p>
                  </C.TaskButtons>
                </C.TaskArea>
              ))
            )}

            {tasks.length === 0 && <h3>Não existem tarefas</h3>}
          </C.TasksContentArea>

          <Button onClick={saveTasks}>Salvar tarefas</Button>
          </React.Fragment>
         }
      </C.Container>
  );
}