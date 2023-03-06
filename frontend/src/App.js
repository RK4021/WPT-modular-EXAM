import logo from './logo.svg';
import './App.css';
import Register from './component/register';
import Login from './component/login';
import { Route, Switch, Redirect } from "react-router-dom";


function App() {
  return (
    <div>
      <Switch>
      <Route path="/login" component = {Login} />
      <Route path="/register" component = {Register} />
      </Switch>
    </div>

  );
}

export default App;

