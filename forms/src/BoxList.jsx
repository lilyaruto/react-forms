import React, { Component } from 'react';
import NewBoxForm from './NewBoxForm';

class BoxList extends Component {
    render() {
        return (
            <div className='box-list'>
                <NewBoxForm />
            </div>
        );
    }
}

export default BoxList;