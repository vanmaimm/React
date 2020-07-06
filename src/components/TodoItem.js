import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        return (
            <div className="title">
                <h1>{this.props.title}</h1>
            </div>
        );
    }
}
export default TodoItem;