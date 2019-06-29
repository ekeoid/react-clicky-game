import React from 'react';

import Jumbotron from '../components/Jumbotron';
import { Col, Row, Container } from '../components/Grid';
import Tile from '../components/Tile';


let characters = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(characters.length);
console.log(characters.map( () => "x" ));

function Home() {
    return (
        <div>
            <Jumbotron>
                <h1>Clicky Game!</h1>
                <h3>Click on an image to earn points, but don't click on any more than once!</h3>
            </Jumbotron>

        <Container style={{ marginTop: 30 }}>
            <Row>
                { characters.map( () => <Tile />) }
            </Row>
            
        </Container>
        </div>
    );
}

export default Home;
