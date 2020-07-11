import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";

import { HomePage } from "./pages/HomePage";
import { TestDetailsPage } from "./pages/TestDetailsPage";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/details/:shortName" component={TestDetailsPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
