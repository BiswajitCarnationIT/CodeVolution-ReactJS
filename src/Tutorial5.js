import logo from './logo.svg';
import './App.css';
//import Greet from './components/Greet';
import {Greet} from './components/Greet';  //In case of name export

function App() {
  return (
    <div className="App">
      <Greet/>
    </div>
  );
}

export default App;
