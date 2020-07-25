import React from "react";
import { useHistory } from "react-router-dom";

interface ISelectedTest {
    testShortName: string;
}

export const ActionButtons: React.FC<ISelectedTest> = ({
    testShortName,
}: ISelectedTest) => {
    const history = useHistory();
    return (
        <div className="btn-group" role="group">
            <button
                className="btn btn-primary"
                onClick={() => history.push("/test/" + { testShortName })}
            >
                Start Test
            </button>
            <button
                className="btn btn-primary"
                onClick={() =>
                    history.push("/" + { testShortName } + "/questions")
                }
            >
                Add Question
            </button>
        </div>
    );
};
