import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";

import { IDetailsMatchParams } from "../common/interfaces";

interface Props extends RouteComponentProps<IDetailsMatchParams> {}

export const TestDetailsPage: React.FC<Props> = ({ match }: Props) => {
    console.log(match.params.shortName);
    return (
        <div>
            <h1>{match.params.shortName}</h1>
        </div>
    );
};
