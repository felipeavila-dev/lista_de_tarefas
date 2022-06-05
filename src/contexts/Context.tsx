import React, { createContext, useState } from "react";
import { TasksTypes } from "../types/TasksTypes";

type ChildrenProps = {
  children: React.ReactNode;
}

type InitialStateTYpe = {
  name: string;
  setName: React.Dispatch<any>;
  tasks: TasksTypes[];
  setTasks: React.Dispatch<any>;
  isLogged: boolean;
  setIsLogged: React.Dispatch<boolean>;
}

const initialState = {
  name: '',
  setName: (content: string) => null,
  tasks: [{id: '1', text: 'Task inicial', done:false}],
  setTasks: (content: string) => null,
  isLogged: false,
  setIsLogged: (content: boolean) => null,
}

export const Context = createContext<InitialStateTYpe>(initialState);


export const ContextProvider = ({children}: ChildrenProps) => {
  const [name, setName] = useState(initialState.name);
  const [tasks, setTasks] = useState(initialState.tasks);
  const [isLogged, setIsLogged] = useState(initialState.isLogged);

  return(
    <Context.Provider value={{
      name,
      setName,
      tasks,
      setTasks,
      isLogged,
      setIsLogged
    }}>
      {children}
    </Context.Provider>
  )
}