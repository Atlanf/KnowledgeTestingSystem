import React from "react";
import { BrowserRouter, Switch, NavLink } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import axios from "axios";

function App() {
    axios
        .get("http://localhost:33458/api/index")
        .then((res) => console.log(res.data));

    return (
        <BrowserRouter>
            <Navbar />
            {/* <HomePage /> */}
        </BrowserRouter>
    );
}

export default App;
