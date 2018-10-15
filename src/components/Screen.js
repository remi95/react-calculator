import React, { Component } from 'react';

class Screen extends Component {

    render() {
        return (
            <div id="screen">
                <div id='result'>{this.props.state.result}</div>

                <input type='text'
                       value={this.props.state.inputValue}
                       onKeyDown={(e) => this.props.keyEvent(e.key)}
                       onChange={() => {}} />
            </div>
        )
    }
}

export default Screen