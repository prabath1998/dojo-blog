
import Home from './Home';
import Navbar from './Navbar';

function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  // const person = {name:'yoshi',age:25}
  const link = 'http://www.google.com';
  return (
    <div className="App">
       <Navbar />
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;
