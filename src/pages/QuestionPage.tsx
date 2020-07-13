import React from "react";
import { Form, Field } from "react-final-form";

export const QuestionPage: React.FC = () => {
    return (
        <div>
            <form>
                <input type="submit" onSubmit={submitValues}></input>
            </form>
        </div>
    );
};

function submitValues(e: React.FormEvent<HTMLInputElement>) {}

function validateForm(): boolean {
    return true;
}
