import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './App.styled';
import { Login } from './pages/Login';
import { Tasks } from './pages/Tasks';
import { ContextProvider } from './contexts/Context';


function App() {
  return (
    <ContextProvider>
      <React.Fragment>
        <GlobalStyle />
        <Routes>
          <Route path="/tasks" element={<Tasks />} /> 
          <Route path="/" element={<Login />} />
        </Routes>
      </React.Fragment>
    </ContextProvider>
  );
}

export default App;
