import React from "react";

interface IApprovedQuestions {
    count: number;
}

export const QuestionCount: React.FC<IApprovedQuestions> = ({
    count,
}: IApprovedQuestions) => {
    if (count > 0) {
        return (
            <div className="text-justify">
                <h4>This test contains {count} questions.</h4>
            </div>
        );
    } else {
        return (
            <div>
                <h4>
                    Sorry, right now this test has no questions available. But
                    you can help add questions to this test.
                </h4>
            </div>
        );
    }
};
