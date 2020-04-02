import React, { Component } from 'react';
import Header from './header';
import AddNewSuccessForm from './addNewSuccessForm';
import SuccessList from './SuccessList';

class App extends Component {
    render() {
        return (
            <>
                <Header siteTitle="Słoik sukcesów" />
                <AddNewSuccessForm />
                <SuccessList />
            </>
        );
    }
}

export default App;