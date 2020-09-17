export interface IDictionary<T> {
    [Key: string]: T;
}

export interface ITestCategoryDTO {
    categoryName: string;
    testFullNames: string[];
    testShortNames: string[];
}

export interface ITestDetailsDTO {
    id: any;
    name: string;
    minimizedName: any;
    testDescription: string;
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
    errors: Error | undefined | IErrors;
    isLoaded: boolean;
}

export interface IErrorResponse {
    errors: IDictionary<string[]>;
    type: string;
    title: string;
    statusCode: number;
    traceId: string;
}

export interface IErrors {
    errors: IDictionary<string[]>;
}

export interface ILoginDTO {
    userName: string;
    password: string;
}

export interface IRegisterDTO {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
    redirectUrl: string;
}

export interface IRegisterResultDTO {
    successful: boolean;
    errors: Array<string> | IErrors;
}
