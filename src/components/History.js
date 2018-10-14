import React, { Component } from 'react';
import ItemHistory from "./ItemHistory";

class History extends Component {

    render() {
        return (
            <div id="history">
                <div><i className="material-icons close" onClick={this.props.clearHistory}>close</i></div>

                <div className="items">
                    {
                        this.props.history.map((item, index) =>
                            <ItemHistory key={index} item={item} />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default History;