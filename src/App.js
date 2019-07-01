import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';


class App extends Component {
  state = {
    score: 0,
    topScore: 0
  }

  handleScores = (score, topScore) => {
    this.setState({
      score,
      topScore
    })
    console.log("score: " + score  );
    console.log("top score: " + topScore);
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar 
            score={this.state.score}
            topScore={this.state.topScore}
          />
            <Route 
              path="/"
              render={ (props) => <Home {...props} handleScores={this.handleScores} />}
            />
          <Footer />
        </div>
      </Router>
    );
  }

};

export default App;
