import logo from './logo.svg';
import './App.css';
import { Card } from './components/Card';
import { CardList } from './components/CardList/index.js';
import {Switch,Route} from "react-router-dom"
import { Favorites } from './components/Favorites/Favorites';

function App() {
  return (
    <div className="App">
   
     <Switch>
       <Route exact path="/" component={CardList}/>
       <Route exact path="/favorites" component={Favorites}/>
     </Switch>
     
    </div>
  );
}

export default App;
