import React, { Component } from 'react';

class Keyboard extends Component {

    render() {
        return (
            <div id='keyboard'>
                <div>
                    {
                        this.props.keys.map(keyValue =>
                            <button key={keyValue} onClick={() => this.props.addToInput(keyValue)}>
                                {keyValue}
                            </button>
                        )
                    }
                </div>
                <div id='actions'>
                    <button onClick={() => this.props.calculate()} id='btn-equal'>=</button>
                    <button onClick={() => this.props.removeLastChar()}>CE</button>
                    <button onClick={() => this.props.clearInput()}>AC</button>
                </div>
            </div>
        );
    }
}

export default Keyboard;
