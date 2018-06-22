import React, { Component } from 'react';
import UrlList from "../../components/UrlList";
import DetailsUrl from "../../components/DetailsUrl";

class Home extends Component {

    render() {
        return (
            <div className="Home">
                <header className="Home-header">
                    <h1 className="Home-title">Urls converter to shorter form</h1>

                    <p className="Home-intro">
                        YellowMe interview
                    </p>
                </header>

                <div className="Home-content">
                    <UrlList/>
                    <DetailsUrl/>
                </div>
            </div>
        );
    }
}

export default Home;