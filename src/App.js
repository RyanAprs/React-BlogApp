import Navbar from './components/Navbar';
import BlogDetails from './pages/BlogDetails';
import Create from './pages/Create';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <div className='content'>
            <Switch>

              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/create">
                <Create />
              </Route>

              <Route path="/blogs/:id">
                <BlogDetails />
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