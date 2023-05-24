import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import FormAdd from './components/FormAdd';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  return (
    <div className="App">
      <DarkModeToggle/>
      <Header/>
      <div className="container my-3">
        <FormAdd/>
      </div>
    </div>
  );
}

export default App;
