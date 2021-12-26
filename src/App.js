import './App.css';
import Routes from './Routes';
import MyContextProvider from './context/MyContextProvider';

function App() {
  return (
    <MyContextProvider>
      <Routes />
    </MyContextProvider>
  );
}

export default App;
