import React, { Component } from 'react';

class ItemHistory extends Component {

    render() {
        return (
            <div className="item-history">
                <span className='calcul'>{this.props.item.operation} =</span>
                <span className="result">{this.props.item.result}</span>
            </div>
        )
    }
}

export default ItemHistory