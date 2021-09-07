

/*.......  Destructing props and state  ......*/



import './App.css';
import Welcome from './components/WelcomeProps2Destructuring'; 



function App() {
    return (
      <div className="App">
        <Welcome name = "Bruce" heroName = "Batman"/>
        <Welcome name = "Clark" heroName = "Superman"/>
        <Welcome name = "Diana" heroName = "Wonder Women"/>
     
      </div>
    );
  }

export default App;