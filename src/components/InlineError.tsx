import React from "react";

import { IErrors } from "../common/interfaces";

export const InlineError: React.FC<IErrors> = (
    { errors }: IErrors,
    field: string
) => {
    if (!errors) {
        return null;
    }
    if (!errors[field]) {
        return null;
    }
    return (
        <div className="errors-container">
            <ul>
                {errors[field].map((err) => (
                    <li>{err}</li>
                ))}
            </ul>
        </div>
    );
};
