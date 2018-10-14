import React, { Component } from 'react';
import './App.css';
import Calculator from "./components/Calculator";
import History from "./components/History";
import FlashMessage from "./components/FlashMessage";

class App extends Component {

    constructor() {
        super();

        this.state = {
            message: {
                type: '',
                text: '',
            }
        }
    }

    setMessage = (type, text) => {
        this.setState({ message: { type, text } })
    };

    render() {
        return (
            <div id='app'>
                <Calculator setMessage={this.setMessage} />

                {/*<History />*/}

                <FlashMessage message={this.state.message}
                              setMessage={this.setMessage} />
            </div>
        )
    }
}

export default App;
