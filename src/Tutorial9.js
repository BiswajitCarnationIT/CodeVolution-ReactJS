
/* ..... Props ....*/



import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
//import {Greet} from './components/Welcome';  //In case of name export
import {Greet} from './components/Greet'; 
import Hello from './components/HelloJSX'; 


function App() {
  return (
    <div className="App">
        <Greet name = "Bruce" heroName = "Batman"/>
        <Greet name = "Clark" heroName = "Superman"/>
        <Greet name = "Diana" heroName = "Wonder Women"/>
     {/* <Welcome/>
      <Hello/>*/}
    </div>
  );
}

export default App;
