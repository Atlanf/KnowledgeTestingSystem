import React from "react";
import { useHistory } from "react-router-dom";

interface ISelectedTest {
    testShortName: string;
}

export const ActionButtons: React.FC<ISelectedTest> = ({
    testShortName,
}: ISelectedTest) => {
    const history = useHistory();

    const testPath = "/test/" + testShortName;
    const addQuestionPath = "/" + testShortName + "/questions";

    return (
        <div className="btn-group" role="group">
            <button
                className="btn btn-primary"
                onClick={() => history.push(testPath)}
            >
                Start Test
            </button>
            <button
                className="btn btn-primary"
                onClick={() => history.push(addQuestionPath)}
            >
                Add Question
            </button>
        </div>
    );
};
