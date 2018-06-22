import React, { Component } from 'react';
class DetailsUrl extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: "",
            message: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({url: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        var message = ""
        var data = {url: this.state.url};
        var _= this
        console.log("submit " + this.state.url);

        fetch('http://localhost:3001/api/v1/generate?url='+this.state.url, {
            method: 'post',
            body: data
        }).then(function(response) {
            return response.json();
        }).then(function(data) {
            console.log(data);
            message = "Your new url is: " + data.generated_url;
            _.setState({
                message: message
            })
        });

    }


    render() {
        return (
            <div className="Details-url">
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Url: <span className="label-space"></span>
                            <input type="text" value={this.state.url} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                    {this.state.message!="" && <p>{this.state.message}</p>}
                </div>
            </div>
        );
    }
}

export default DetailsUrl;