import React, { Component } from 'react';

class FlashMessage extends Component {

    clearMessage = () => {
        this.props.setMessage()
    };

    render() {
        return (
            <div className="text-center">
                <div id="message"
                     className={this.props.message.type}>

                    {this.props.message.text}

                    <i id='close' className="material-icons" onClick={this.clearMessage}>close</i>

                </div>
            </div>
        )
    }
}

export default FlashMessage;