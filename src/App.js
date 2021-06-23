import './App.css';
import { Switch, Route } from "react-router-dom";
import  Home from "./components/pages/Home";
import AddEvent from './components/forms/AddEvent';
//import { NavBar } from "./components/items/NavBar";
//import ComponentList from './components/pages/ComponentList'
import ComponentDisplay from './components/pages/ComponentDisplay';
//import { UpdateEvent } from './components/forms/UpdateEvent';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/add-event" component={ AddEvent } />
        <Route exact path="/event/:id" component={ ComponentDisplay } />
      </Switch>
    </div>
  );
}

export default App;
