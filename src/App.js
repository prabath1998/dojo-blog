
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router,Route, Switch  } from 'react-router-dom';
import Create from './Create';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  // const person = {name:'yoshi',age:25}
  const link = 'http://www.google.com';
  return (
    <Router>
    <div className="App">
       <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/create">
              <Create />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
