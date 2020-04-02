import React, { Component } from 'react';
import AddNewSuccesInput from "./addNewSuccessInput";
import AddNewSuccessButton from './addNewSuccessButton';

class AddNewSuccessForm extends Component {
    render() {
        return (
            <div>
                <AddNewSuccesInput />
                <AddNewSuccessButton />
            </div>
        );
    }
}

export default AddNewSuccessForm;