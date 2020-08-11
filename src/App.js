import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Link to='/' component={Home} />
      </Router>
    </div>

  )
}


export default App;
