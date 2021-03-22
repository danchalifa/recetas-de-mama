import React, { Component } from 'react';
import logo from '../images/tablecloth.jpeg'; // Tell webpack this JS file uses this image
import { Card,Nav,Button } from 'react-bootstrap'

export default class extends React.Component {

    render() {
        return (
            
            <Card style={{ height: '14rem', width: '14rem', display: 'inlineBlock' }}>
                    <Card.Body>
                        <Card.Text>
                            {this.props.category}
                        </Card.Text>
                    </Card.Body>
                </Card>
        )
    }

}

