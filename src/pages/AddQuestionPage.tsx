import React from "react";
import { Formik, Field, Form } from "formik";

import { ICreateQuestionDTO } from "../common/interfaces";

export const AddQuestionPage: React.FC = () => {
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
