import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Footer />
            </div>
        );
    }
}

export default App;
