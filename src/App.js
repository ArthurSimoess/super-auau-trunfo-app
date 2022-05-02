import './App.css';
import React from 'react';
import Routes from './Routes';
import MyContextProvider from './context/MyContextProvider';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <MyContextProvider>
      <Routes />
    </MyContextProvider>
  );
}

export default App;
