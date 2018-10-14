import React, { Component } from 'react';
import './App.css';
import Keyboard from "./components/Keyboard";

class App extends Component {
    constructor() {
        super()

        this.keys = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '%', '/']

        this.state = {
            result: '',
            inputValue: '',
            error: ''
        }
    }

    keyEvent(key) {
        if (key === 'Enter') {
            this.calculate()
        }
        else if (key === 'Backspace') {
            this.removeLastChar()
        }
        else if (this.keys.includes(key)) {
            this.addToInput(key)
        }
    }

    addToInput(value) {
        this.setState((prevState) => ({
            inputValue: prevState.inputValue + value
        }))
    }

    clearInput() {
      this.setState({ inputValue: '' })
    }

    removeLastChar() {
        this.setState((prevState) => ({
            inputValue:  prevState.inputValue.slice(0, -1)
        }))
    }

    calculate() {
        try {
            this.setState({result: eval(this.state.inputValue) })
        }
        catch (e) {
            this.setState({error: 'Une erreur est survenue lors de votre calcul' })
        }
    }

    render() {
        return (
            <div id='calculator'>
                <div id='result'>{this.state.result}</div>

                <input type='text'
                       value={this.state.inputValue}
                       onKeyDown={(e) => this.keyEvent(e.key)}
                       onChange={() => {}} />

                <Keyboard keys={this.keys}
                          addToInput={this.addToInput.bind(this)}
                          clearInput={this.clearInput.bind(this)}
                          calculate={this.calculate.bind(this)}
                          removeLastChar={this.removeLastChar.bind(this)} />

                <div id='error'>{this.state.error}</div>
            </div>
        );
    }
}

export default App;
