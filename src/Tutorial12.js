

/*.......  Destructing props and state  ......*/



import './App.css';
import Greet from './components/Greet3'; 



function App() {
    return (
      <div className="App">
          <Greet name = "Bruce" heroName = "Batman"/>
          <Greet name = "Clark" heroName = "Superman"/>
          <Greet name = "Diana" heroName = "Wonder Women"/>
     
      </div>
    );
  }

export default App;