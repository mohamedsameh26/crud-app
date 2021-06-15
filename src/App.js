import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'
import { ProviderComponent } from './context/GlobalState'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <ProviderComponent>
      <div className="App" style={{maxWidth:"30rem", margin: "4px auto"}}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/add" component={AddUser} />
            <Route path="/edit/:id" component={EditUser} />
          </Switch>
        </Router>
      </div>
    </ProviderComponent>
  );
}

export default App;
