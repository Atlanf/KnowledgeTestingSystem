import React from "react";
import { RouteComponentProps } from "react-router-dom";

import {
    IDetailsMatchParams,
    ITestDetailsDTO,
    IApiFetchingResult,
} from "../common/interfaces";

import { Details } from "../components/testDetailsPageComponents/Details";
import { UserResult } from "../components/testDetailsPageComponents/UserResult";
import { Spinner } from "../components/Spinner";

import { ApiWorker } from "../services/apiWorker";

interface Props extends RouteComponentProps<IDetailsMatchParams> {}

export const TestDetailsPage: React.FC<Props> = ({ match }: Props) => {
    const apiWorker = new ApiWorker();
    const fetchResult: IApiFetchingResult<ITestDetailsDTO> = apiWorker.get(
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
                    description={testDetails.testDescription}
                    questionsApproved={testDetails.questionsApproved}
                />
                <UserResult />
            </div>
        );
    }
};
