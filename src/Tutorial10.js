
/*.....  State  ........*/

import logo from './logo.svg';
import './App.css';
import Welcome from './components/WelcomeProps';
//import {Greet} from './components/Welcome';  //In case of name export
import Message from './components/Message'; 



function App() {
  return (
    <div className="App">
        <Message/>
    </div>
  );
}

export default App;

