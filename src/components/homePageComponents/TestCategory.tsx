import React from "react";
import { Link } from "react-router-dom";

import { ITestCategoryDTO } from "../../common/interfaces";

export const TestCategory: React.FC<ITestCategoryDTO> = ({
    categoryName,
    testFullNames,
    testShortNames,
}) => {
    if (isEmpty(testFullNames)) {
        return (
            <div className="card mb-4">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">{categoryName}</h4>
                </div>
                <div className="card-body">
                    <h3>No tests found</h3>
                </div>
            </div>
        );
    } else {
        return (
            <div className="card mb-4">
                <div className="card-header">
                    <h4 className="my-0 font-weight-normal">{categoryName}</h4>
                </div>
                <div className="card-body">
                    <ul className="list-unstyled mt-3 mb-4">
                        {testFullNames.map((fullName, i) => (
                            <li>
                                <Link to={`/details/${testShortNames[i]}`}>
                                    {fullName}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
};

function isEmpty(value: string[]): boolean {
    if (value.length === 0) {
        return true;
    } else {
        return false;
    }
}
