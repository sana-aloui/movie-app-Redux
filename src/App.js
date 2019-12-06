import React from 'react';
import Home from './component/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Details from './component/Details'

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <Home/> */}
     <Switch>
      <Route exact path ='/' component={Home}/>
      <Route path='/Details/:id' component={Details}/>
      </Switch>

    </div>
    </BrowserRouter>
  );
}

export default App;
