import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import { v4 } from "uuid";

import "./BoxList.css"

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: [
                {height: 40, width: 50, bg_color: "cyan", id: v4()}
            ]
        }
        this.addBox = this.addBox.bind(this);
        this.removeBox = this.removeBox.bind(this);
    }

    addBox(box) {
        let newItem = {...box, id: v4()};
        this.setState(state => ({
            boxes: [...state.boxes, newItem]
        }))
    }

    removeBox(id) {
        this.setState({
            boxes: this.state.boxes.filter((box) => box.id !== id)
        })
    }

    render() {
        return (
            <div className='box-list'>
                <NewBoxForm addBox={this.addBox}/>
                <ul>
                    {this.state.boxes.map(box => {
                        return <li key={box.id}>
                            <Box
                            height={Number(box.height)}
                            width={Number(box.width)}
                            color={box.bg_color}
                            removeBox={() => this.removeBox(box.id)}
                            id={box.id}/>
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}

export default BoxList;