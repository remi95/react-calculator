import React, { Component } from 'react';
import Keyboard from "./Keyboard";

class Calculator extends Component {
    constructor() {
        super()

        this.keys = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', '0', '.', '%', '/']

        this.state = {
            result: '',
            inputValue: '',
        }
    }

    keyEvent = (key) => {
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

    clearInput = () => {
        this.setState({ inputValue: '' })
    }

    removeLastChar = () => {
        this.setState((prevState) => ({
            inputValue:  prevState.inputValue.slice(0, -1)
        }))
    }

    calculate = () => {
        try {
            let result = eval(this.state.inputValue).toString()
            this.setState({
                result: result,
                inputValue: result
            })
        }
        catch (e) {
            this.props.setMessage('error', 'Une erreur est survenue lors de votre calcul')
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
                          clearInput={this.clearInput}
                          calculate={this.calculate}
                          removeLastChar={this.removeLastChar} />
            </div>
        );
    }
}

export default Calculator;