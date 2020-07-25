import React from "react";

import { ITestDetails } from "../../common/interfaces";

import { ActionButtons } from "./ActionButtons";
import { QuestionCount } from "./QuestionCount";

export const Details: React.FC<ITestDetails> = ({
    name,
    description,
    questionsApproved,
    testShortName,
}: ITestDetails) => {
    return (
        <div>
            <div className="text-justify">
                <h3>Welcome to {name} test!</h3>
            </div>
            <div className="text-justify mr-1">
                <p>{description}</p>
            </div>
            <div>
                <QuestionCount count={questionsApproved}></QuestionCount>
            </div>
            <ActionButtons testShortName={testShortName} />
            <br />
        </div>
    );
};
