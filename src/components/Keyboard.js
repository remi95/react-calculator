import React, { Component } from 'react';

class Keyboard extends Component {

    render() {
        return (
            <div id='keyboard'>
                <div>
                    {
                        this.props.keys.map((keyValue, index) =>
                            <button key={index} onClick={() => this.props.inputMethods.addToInput(keyValue)}>
                                {keyValue}
                            </button>
                        )
                    }
                </div>
                <div id='actions'>
                    <button onClick={this.props.calculate} id='btn-equal'>=</button>
                    <button onClick={this.props.inputMethods.removeLastChar}>CE</button>
                    <button onClick={this.props.inputMethods.clearInput}>AC</button>
                </div>
            </div>
        );
    }
}

export default Keyboard;
