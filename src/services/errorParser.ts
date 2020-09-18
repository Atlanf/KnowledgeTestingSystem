import React from "react";
import { IErrors, IErrorResponse } from "../common/interfaces";

export class ErrorParser {
    private errorOccured: boolean = false;
    private responseStatusCode: number = 200;
    private errorRecords: IErrors = { errors: {} };

    public get statusCode(): number {
        return this.responseStatusCode;
    }

    public get errors(): IErrors {
        return this.errorRecords;
    }

    public get isErrorResponse(): boolean {
        return this.errorOccured;
    }

    constructor(response: any) {
        console.log("response is: " + response + "; ");
        console.log(response);
        if (response["errors"]) {
            try {
                this.parseErrorResponse(response as IErrorResponse);
            } catch {
                this.responseStatusCode = 0;
            }
        } else {
            this.errorOccured = false;
        }
    }

    private parseErrorResponse(response: IErrorResponse) {
        this.responseStatusCode = response.statusCode;
        this.errorRecords.errors = response.errors;
        this.errorOccured = true;

        console.log("RESPONSE OBJECT: ");
        console.log(response);
        console.log("ERRORS FROM RESPONSE: ");
        console.log(response.errors);
        console.log("LIST OF ERRORS: ");
        console.log(this.errorRecords.errors);
    }
}
