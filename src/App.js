// import "./App.css";
import Navbar from './Navbar';
import Home from './Home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom/cjs/react-router-dom.min';
import Create from './create';
import BlogDetails from './blogdetails';
import NotFound from './NotFound';

function App() {
  // const title = "Welcome to the new blog";
  // const likes = 50;
  // const link1 = "http://www.google.com";
  // const person = { name: "Ravi", age: 30 };

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
              <Create></Create>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails></BlogDetails>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
