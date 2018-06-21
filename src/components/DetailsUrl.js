import React, { Component } from 'react';
class DetailsUrl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: "facebook.com",
        }
    }

    render() {
        return (
            <div className="Details-url">
                <label className="Url">{this.state.url}</label>
            </div>
        );
    }
}

export default DetailsUrl;