import React, { Component } from "react";
import { CartProvider } from './components/Context/CartContext.js'

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";

class App extends Component {
    render() {
        return (
            <div>
                <CartProvider>
                <Header />
                <Footer />
                </CartProvider>
            </div>
        );
    }
}

export default App;
