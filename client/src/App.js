import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Dashboard from './views/Dashboard';
import About from './views/About';
function App() {
  return (
    <Router>
      <Sidebar/>
      <Switch>
        <Route path = "/" exact component = {Dashboard}/>
        <Route path = "/about" exact component = {About}/>
      </Switch>
    </Router>
  );
}

export default App;
