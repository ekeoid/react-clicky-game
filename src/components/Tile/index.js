import React from 'react';
import { Col } from '../Grid';
import "./style.css";

export function Tile({ url }) {
    return (
        <Col size="md-3">
            <img  src="https://via.placeholder.com/150" alt="pic"/>
        </Col>
    );
}




export default Tile;