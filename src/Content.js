import React, {Component } from 'react';

class Content extends Component{
    render() {
        return (
            <div className="App-content">
                {this.props.page}
            </div>
        );
    }
}

export default Content;