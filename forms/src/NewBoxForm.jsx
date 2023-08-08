import React, { Component } from 'react';
import "../src/NewBoxForm.css"

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: "",
            width: "",
            bg_color: "#000000",
            id: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addBox(this.state);
        this.setState({
            height: "",
            width: "",
            bg_color: "#000000"
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className='form_row'>
                    <label htmlFor="height">Height</label>
                    <input onChange={this.handleChange} id="height" type="number" min={1} name="height" value={this.state.height}/>
                </div>
                <div className='form_row'>
                    <label htmlFor="width">Width</label>
                    <input onChange={this.handleChange} id="width" type="number" min={1} name="width" value={this.state.width}/>
                </div>
                <div className='form_row'>
                    <label htmlFor="bg_color">Color</label>
                    <input onChange={this.handleChange} id="bg_color" type="color" name="bg_color" value={this.state.bg_color}/>
                </div>
                <button className='btn-submit' type="submit">Add a new box!</button>
            </form>
        );
    }
}

export default NewBoxForm;