import React, { useState, useEffect } from "react";
import axios from "axios";
import { RouteComponentProps } from "react-router-dom";

import {
    IDetailsMatchParams,
    ITestDetailsDTO,
    IApiFetchingResult,
} from "../common/interfaces";
import { API_URL } from "../common/apiUrl";

import { Details } from "../components/testDetailsPageComponents/Details";
import { UserResult } from "../components/testDetailsPageComponents/UserResult";
import { Spinner } from "../components/Spinner";

import FetchApi from "../api/FetchApi";

interface Props extends RouteComponentProps<IDetailsMatchParams> {}

export const TestDetailsPage: React.FC<Props> = ({ match }: Props) => {
    const fetchResult: IApiFetchingResult<ITestDetailsDTO> = FetchApi(
        "/TestDetails/" + match.params.shortName
    );

    const testDetails: ITestDetailsDTO = fetchResult.result[0];

    if (fetchResult.errors) {
        return <div>Error: {fetchResult.errors.message}</div>;
    } else if (!fetchResult.isLoaded) {
        return <Spinner />;
    } else {
        return (
            <div>
                <Details
                    testShortName={testDetails.minimizedName}
                    name={testDetails.name}
                    description={testDetails.description}
                    questionsApproved={testDetails.questionsApproved}
                />
                <UserResult />
            </div>
        );
    }
};
