import React from "react";
import { AuthService } from "../services/authService";
import { Spinner } from "../components/Spinner";

export const RegistrationPage: React.FC = () => {
    const auth = new AuthService();

    let response = auth.register({
        userName: "test123",
        password: "password1",
        confirmPassword: "password",
        email: "test",
        redirectUrl: "",
    });

    if (response.errors) {
        console.log(response.errors);
    }
    if (!response.isLoaded) {
        return <Spinner />;
    }

    return <div></div>;
};
