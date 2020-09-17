import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";

import { HomePage } from "./pages/HomePage";
import { TestDetailsPage } from "./pages/TestDetailsPage";
import { TestingPage } from "./pages/TestingPage";
import { AddQuestionPage } from "./pages/AddQuestionPage";
import { RegistrationPage } from "./pages/RegistrationPage";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/details/:shortName" component={TestDetailsPage} />
                <Route path="/test/:testShortName" component={TestingPage} />
                <Route
                    path="/:testShortName/questions"
                    component={AddQuestionPage}
                />
                <Route path="/registration" component={RegistrationPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
