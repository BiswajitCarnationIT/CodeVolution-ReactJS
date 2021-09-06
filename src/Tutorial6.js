import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
//import {Greet} from './components/Welcome';  //In case of name export
import {Greet} from './components/Greet'; 

function App() {
  return (
    <div className="App">
        <Greet/>
      <Welcome/>
    </div>
  );
}

export default App;
