import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import { TestCategory } from "../components/homePageComponents/TestCategory";
import { ITestCategoryDTO } from "../common/interfaces";
import { Spinner } from "../components/Spinner";
import { API_URL } from "../common/apiUrl";

export const HomePage: React.FC = () => {
    const [categories, setCategories] = useState<ITestCategoryDTO[]>();
    const [error, setError] = useState<Error>();
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        axios.get(API_URL + "/index").then(
            (response) => {
                const result: ITestCategoryDTO[] = response.data;
                setCategories(result);
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
            <div className="container">
                <div className="card-deck mb-3 text-center">
                    {categories!.map((item) => (
                        <TestCategory
                            categoryName={item.categoryName}
                            testFullNames={item.testFullNames}
                            testShortNames={item.testShortNames}
                        />
                    ))}
                </div>
            </div>
        );
    }
};
