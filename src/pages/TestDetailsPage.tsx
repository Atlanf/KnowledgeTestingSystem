import React, { useState, useEffect } from "react";
import axios from "axios";
import { RouteComponentProps } from "react-router-dom";

import { IDetailsMatchParams, ITestDetailsDTO } from "../common/interfaces";
import { API_URL } from "../common/apiUrl";

import { Details } from "../components/testDetailsPageComponents/Details";
import { UserResult } from "../components/testDetailsPageComponents/UserResult";
import { Spinner } from "../components/Spinner";

interface Props extends RouteComponentProps<IDetailsMatchParams> {}

export const TestDetailsPage: React.FC<Props> = ({ match }: Props) => {
    const [testDetails, setDetails] = useState<ITestDetailsDTO>();
    const [isLoaded, setIsLoaded] = useState<boolean>(false);
    const [error, setError] = useState<Error>();

    useEffect(() => {
        axios.get(API_URL + "/TestDetails/" + match.params.shortName).then(
            (response) => {
                const result: ITestDetailsDTO = response.data;
                setDetails(result);
                setIsLoaded(true);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <Spinner />;
    } else {
        return (
            <>
                <Details
                    testShortName={testDetails!.minimizedName}
                    name={testDetails!.name}
                    description={testDetails!.description}
                    questionsApproved={testDetails!.questionsApproved}
                />
                <UserResult />
            </>
        );
    }
};
