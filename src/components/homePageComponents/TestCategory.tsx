import React from "react";
import { Link } from "react-router-dom";

import { TestCategoryDTO } from "../../common/interfaces";

export const TestCategory: React.FC<TestCategoryDTO> = ({
    categoryName,
    testFullNames,
    testShortNames,
}) => {
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
};
