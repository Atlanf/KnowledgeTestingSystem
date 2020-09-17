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

    constructor(response: string) {
        console.log("response is: " + response + "; ");
        if (response.includes("errors")) {
            try {
                this.parseErrorResponse(response);
            } catch {
                this.responseStatusCode = 0;
            }
        } else {
            this.errorOccured = false;
        }
    }

    private parseErrorResponse(response: string) {
        const responseObject: IErrorResponse = JSON.parse(response);
        this.responseStatusCode = responseObject.statusCode;
        this.errorRecords.errors = responseObject.errors;
        this.errorOccured = true;
    }
}
