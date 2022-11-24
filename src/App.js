import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import './index.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
                <HomePage/>
        </Route>
        <Route exact path='/'>
                <HomePage/>
        </Route>
        <Route exact path='/'>
                <HomePage/>
        </Route>
      </Switch>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
