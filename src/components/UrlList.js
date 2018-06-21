import React, { Component } from 'react';
class UrlList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urls: [1,2,3,4,5,6,7,8,9],
        }
    }

    render() {
        var listUrls = this.state.urls.map((url) =>
            <li>{url}</li>
        );
        return (
            <div className="Url-list">
                <h4>Registered urls</h4>
                <ul>{listUrls}</ul>
            </div>
        );
    }
}

export default UrlList;