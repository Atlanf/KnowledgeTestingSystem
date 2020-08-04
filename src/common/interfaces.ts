export interface ITestCategoryDTO {
    categoryName: string;
    testFullNames: string[];
    testShortNames: string[];
}

export interface ITestDetailsDTO {
    id: any;
    name: string;
    minimizedName: any;
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

export interface ICreateQuestionDTO {
    testId: number;
    userId: number;
    questionDescription: string;
    multipleAnswers: boolean;
    choices: string[];
    answers: number[];
}

export interface ITestDetails {
    testShortName: string;
    name: string;
    description: string;
    questionsApproved: number;
}

export interface IApiFetchingResult<T> {
    result: T[];
    errors: Error | undefined;
    isLoaded: boolean;
}
