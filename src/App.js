import React from 'react';
import initMock from './mock/mock'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Index from './component/Index/Index'
import Shop from './component/Shop/Shop'

import './font/css/font-awesome.min.css'
import './App.css';
function App() {
  initMock()
  return (
    <div className="App">
      <Router>
        <Route path='/' exact component={Index} />
        <Route path='/shop/:id' component={Shop} />
      </Router>
    </div>
  );
}

export default App;
