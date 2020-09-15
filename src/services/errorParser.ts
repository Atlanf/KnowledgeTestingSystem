import React from "react";
import { IErrors, IErrorResponse } from "../common/interfaces";

export class ErrorParser {
    private responseStatusCode: number = 200;
    private errorRecords: IErrors = { errors: {} };

    public get statusCode(): number {
        return this.responseStatusCode;
    }

    public get errors(): IErrors {
        return this.errors;
    }

    constructor(response: string) {
        if (response.includes("errors")) {
            const responseObject: IErrorResponse = JSON.parse(response);
            this.responseStatusCode = responseObject.statusCode;
        }
    }
}
