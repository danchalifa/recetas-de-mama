import React, { Component } from 'react';
import logo from '../images/tablecloth.jpeg'; // Tell webpack this JS file uses this image
import { Card,Nav,Button } from 'react-bootstrap'

export default class extends React.Component {

    render() {
        return (
            <Card hoverable> 
                <Card.Img variant="top" src="https://source.unsplash.com/user/erondu/600x400" />
                    <Card.Body>
                        <Card.Text>
                            {this.props.category}
                        </Card.Text>
                    </Card.Body>
                </Card>
        )
    }

}

