import React from 'react';

// Components
import Home from './containers/Home';
import Navbar from './components/common/Navbar';
import Container from './components/common/Container';


// React router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Container>
              <Route exact path="/" component={Home} />
            </Container>
            
          </Switch>
        </Router>
    </div>
  );
}

export default App;
