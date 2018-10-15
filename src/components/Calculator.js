import React, { Component } from 'react';
import Keyboard from "./Keyboard";
import Screen from "./Screen";

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
            this.inputMethods.removeLastChar()
        }
        else if (this.keys.includes(key)) {
            this.inputMethods.addToInput(key)
        }
    };

    inputMethods = {
        addToInput: (value) => {
            this.setState((prevState) => ({
                inputValue: prevState.inputValue + value
            }))
        },

        removeLastChar: () => {
            this.setState((prevState) => ({
                inputValue: prevState.inputValue.slice(0, -1)
            }))
        },

        clearInput: () => {
            this.setState({inputValue: ''})
        },
    };

    calculate = () => {
        try {
            let result = eval(this.state.inputValue).toString();
            this.props.addHistoryItem(this.state.inputValue, result);

            this.setState({
                result: result,
                inputValue: result
            })
        }
        catch (error) {
            this.props.setMessage('error', 'Une erreur est survenue lors de votre calcul')
        }
    };

    render() {
        return (
            <div id='calculator'>
                <Screen state={this.state}
                        keyEvent={this.keyEvent} />

                <Keyboard keys={this.keys}
                          inputMethods={this.inputMethods}
                          calculate={this.calculate} />
            </div>
        );
    }
}

export default Calculator;