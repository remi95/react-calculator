import React, { Component } from 'react';

class FlashMessage extends Component {

    render() {
        return (
            <div className="text-center">
                <div id="message"
                     className={this.props.message.type}>

                    {this.props.message.text}

                    <i className="material-icons close" onClick={() => this.props.setMessage()}>close</i>

                </div>
            </div>
        )
    }
}

export default FlashMessage;