import React from "react";

import { TestCategory } from "../components/homePageComponents/TestCategory";
import { ITestCategoryDTO, IApiFetchingResult } from "../common/interfaces";
import { Spinner } from "../components/Spinner";
import FetchApi from "../api/FetchApi";

export const HomePage: React.FC = () => {
    const fetchResult: IApiFetchingResult<ITestCategoryDTO> = FetchApi(
        "/index"
    );

    const categories: ITestCategoryDTO[] = fetchResult.result;

    if (fetchResult.errors) {
        return <div>Error: {fetchResult.errors.message}</div>;
    } else if (!fetchResult.isLoaded) {
        return <Spinner />;
    } else {
        return (
            <div className="container">
                <div className="card-deck mb-3 text-center">
                    {categories &&
                        categories!.map((item) => {
                            return (
                                <TestCategory
                                    categoryName={item.categoryName}
                                    testFullNames={item.testFullNames}
                                    testShortNames={item.testShortNames}
                                />
                            );
                        })}
                </div>
            </div>
        );
    }
};
