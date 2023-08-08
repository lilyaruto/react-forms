import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

import "./BoxList.css"

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [
                {height: 40, width: 50, bg_color: "cyan"}
            ]
        }
        this.addBox = this.addBox.bind(this);
    }

    addBox(box) {
        this.setState(state => ({
            boxes: [...state.boxes, box]
        }))
    }

    render() {
        return (
            <div className='box-list'>
                <NewBoxForm addBox={this.addBox}/>
                <ul>
                    {this.state.boxes.map(box => {
                        return <li>
                            <Box height={Number(box.height)} width={Number(box.width)} color={box.bg_color}/>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}

export default BoxList;