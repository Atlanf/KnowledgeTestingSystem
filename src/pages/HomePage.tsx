import React from "react";

import { TestCategory } from "../components/homePageComponents/TestCategory";
import {
    ITestCategoryDTO,
    IApiFetchingResult,
    IRegisterResultDTO,
} from "../common/interfaces";
import { Spinner } from "../components/Spinner";
import { ApiWorker } from "../services/apiWorker";
import { IRegisterDTO } from "../common/interfaces";

export const HomePage: React.FC = () => {
    const apiWorker = new ApiWorker();
    const fetchResult: IApiFetchingResult<ITestCategoryDTO> = apiWorker.get(
        "/index"
    );
    const categories: ITestCategoryDTO[] = fetchResult.result;

    if (fetchResult.errors) {
        return <div>Error: {(fetchResult.errors as Error).message}</div>;
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
        return <div></div>;
    }
};
