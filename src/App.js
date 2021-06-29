import './App.css';
import { Switch, Route } from "react-router-dom";
import  Home from "./components/pages/Home";
import AddEvent from './components/forms/AddEvent';
import NavBar from "./components/items/NavBar";
//import ComponentList from './components/pages/ComponentList'
import ComponentCard from './components/pages/ComponentCard';
import UpdateEvent from './components/forms/UpdateEvent';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/add-event" component={ AddEvent } />
        <Route exact path="/event/:id" component={ ComponentCard } />
        <Route exact path="/update-event/:id" component={ UpdateEvent } />
      </Switch>
    </div>
  );
}

export default App;
