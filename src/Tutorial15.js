/* ----------   Methods as props ----- 

Child wanted to communicate to parent.

passing ref to a method to child component

*/



import './App.css';
import ParentComponent from './components/ParentComponent2'; 



function App() {
    return (
      <div className="App">
          <ParentComponent/>
     
      </div>
    );
  }

export default App;