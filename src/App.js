import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import About from './routes/About';
import Main from './routes/Main';

const App = () => (
    <Switch>
      <Route exact path='/' component={Main}/>
      <Route path='/About' component={About}/>
    </Switch>
)

export default App