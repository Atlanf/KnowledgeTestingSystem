export interface ITestCategoryDTO {
    categoryName: string;
    testFullNames: string[];
    testShortNames: string[];
}

export interface ITestDetailsDTO {
    id: number;
    name: string;
    minimizedName: string;
    description: string;
    questionsApproved: number;
}

export interface ITestDTO {
    testId: number;
    questionsId: number[];
}

export interface IDetailsMatchParams {
    shortName: string;
}
