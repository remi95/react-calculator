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
            },
            history: [],
        }
    }

    setMessage = (type, text) => {
        this.setState({ message: { type, text } })
    };

    addHistoryItem = (operation, result) => {
        this.setState((prevState) => ({
            history: [{ operation, result }].concat(prevState.history)
        }))
    };

    clearHistory = () => {
        this.setState({ history: [] })
    };

    render() {
        return (
            <div id='app'>
                <div className="flex-center">
                    <Calculator setMessage={this.setMessage}
                                addHistoryItem={this.addHistoryItem} />

                    <History history={this.state.history}
                             clearHistory={this.clearHistory} />
                </div>

                <FlashMessage message={this.state.message}
                              setMessage={this.setMessage} />
            </div>
        )
    }
}

export default App;
