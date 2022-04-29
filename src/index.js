import React from 'react'
import ReactDOM from 'react-dom'
import Bar from './components/Bar'
import Home from "./components/Home";
// import { BrowserRouter as Router } from 'react-router-dom';
// import App from './App'
// import Routes from './Routes';
import './index.css'

// ReactDOM.render(<App />, document.getElementById('root'))

ReactDOM.render(
      <div className="App">
        <Bar />
        <Home />
      </div>,
    document.getElementById('root')
);
