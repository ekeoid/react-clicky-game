import React, { Component } from 'react';

import Jumbotron from '../components/Jumbotron';
import { Col, Row, Container } from '../components/Grid';
import Tile from '../components/Tile';
import Alert from '../components/Alert';
import { shuffle, colors } from '../util/Colors';

class Home extends Component {
    state = {
        colors, 
        clicked: [],
        score: 0,
        topScore: 0,
        message: {
            status: "none",
            text: ""
        }
    };

    componentDidMount() {
        this.setState({
            colors: shuffle(colors).slice(4)
        });
    }
    
    clickTile = (event) => {
        const targetTile = event.target.alt;
        let action = false;
        let score = this.state.score;
                
        if (this.state.clicked.indexOf(targetTile) === -1) {
            this.state.clicked.push(targetTile);
            action = true;
            console.log("Click: ", action);
        } else {
            action = false;
            console.log("Click: ", action);
        }

        if (action) {
            // continue
            score += 1;
            this.setState({
                colors: shuffle(this.state.colors),
                score: score,
                message: {
                    status: "none"
                }
            });
            console.log(this.state.score, this.state.topScore);
        } else {
            // lose
            console.log("Clicked Already!");
            score = 0;
            this.setState({
                colors: shuffle(this.state.colors),
                clicked: [],
                score: 0,
                topScore: (this.state.score > this.state.topScore) 
                        ? this.state.score
                        : this.state.topScore,
                message: {
                    status: "danger",
                    text: "You clicked a color twice! Sorry, better luck next time"
                }
            });
        }

        //win
        if (this.state.score === 12) {
            score = 0;
            this.setState({
                colors: shuffle(this.state.colors),
                clicked: [],
                score: 0,
                topScore: (this.state.score > this.state.topScore) 
                        ? this.state.score
                        : this.state.topScore,
                message: {
                    status: "success",
                    text: "You did it! You matched all the colors."
                }
            });
        }
        
        this.props.handleScores(score, this.state.topScore);
        // console.log(this.state.colors);
        return console.log( this.state.clicked );
    
    }

    render() {
        return (
            <div>
                <Alert value={this.state.message}/>
                <Jumbotron>
                    <h1>Clicky Game!</h1>
                    <h3>Click on an image to earn points, but don't click on any more than once!</h3>
                </Jumbotron>

            <Container style={{ marginTop: 30 }}>
                <Row>
                    { this.state.colors.map( (value, index) => {
                        // console.log(value);
                        // console.log(window.location);
                        return (
                            <Tile key={index} id={value.name} onClick={this.clickTile} url={value.path}/>
                        );
                    }) }
                </Row>
                
            </Container>
            </div>
        );
    }
};

export default Home;
