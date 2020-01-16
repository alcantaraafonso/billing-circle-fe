import React, { Component } from 'react'


export default class IconButton extends Component {
    render() {
        const handleClick = this.props.handleClick ? this.props.handleClick : ''
        return (
            <button type='button' className={`btn btn-${this.props.buttonClass}`}
                onClick={handleClick} >
                <i className={`fa fa-${this.props.iconClass}`}></i>
            </button>
        )
    }
}