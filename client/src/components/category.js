import React, { Component } from 'react';
import { Card,Nav,Button } from 'react-bootstrap'

export default class extends React.Component {

    render() {
        return (
            <div>
                 <img src={"https://source.unsplash.com/user/erondu/600x400"} />
                    {this.props.category}
            </div>
           
        )
    }

}

