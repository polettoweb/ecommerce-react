import React from 'react';
import Homepage from './pages/homepage/homepage.component'
import './App.css';
import { Route, Switch } from 'react-router-dom';

const HatsPage = () => (
  <div>
    <h1>HatsPage</h1>
  </div>
)

function App() {
  return (
    <div >
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
