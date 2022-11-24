import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import GamePage from './Pages/GamePage';
import HomePage from './Pages/HomePage';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path='/' >
                <HomePage/>        </Route>
        <Route exact path='/games'>
                <GamePage/>
        </Route>
        <Route exact path='/'>
                
        </Route>
      </Switch>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
