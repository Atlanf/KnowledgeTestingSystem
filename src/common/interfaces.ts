export interface TestCategoryDTO {
    categoryName: string;
    testFullNames: string[];
    testShortNames: string[];
}

export interface TestDetailsDTO {
    id: number;
    name: string;
    minimizedName: string;
    description: string;
    questionsApproved: number;
}

export interface TestDTO {
    testId: number;
    questionsId: number[];
}

export interface DetailsMatchParams {
    shortName: string;
}
