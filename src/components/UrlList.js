import React, { Component } from 'react';
class UrlList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urls: [ ],
        }
    }
    componentDidMount() {
        fetch("http://localhost:3001/api/v1/urls")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        urls: result.urls
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        var listUrls = this.state.urls.map((url) =>
            <li key={url.id}>
                <p className="type-url">Original: <span>{url.original }</span>   ↓↓↓↓</p>
                <span className="label-space"></span>
                <label className="type-url-label">Generated: <a href={"http://localhost:3001/api/v1/"+url.generated_code}>{"http://localhost:3001/"+url.generated_code}</a></label>
            </li>
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