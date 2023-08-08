import React, { Component } from 'react';

import "./Box.css"

class Box extends Component {
    static defaultProps = {
        height: 100,
        width: 100,
        bg_color: "black"
    }
    render() {
        const boxStyle = {
            width: this.props.width,
            height: this.props.height,
            backgroundColor: this.props.color
        }
        return (
            <div style={boxStyle} className='box'>
                <button className='btn-remove'>x</button>
            </div>
        );
    }
}

export default Box;