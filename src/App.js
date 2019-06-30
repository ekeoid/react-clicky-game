import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/" component={Home} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
