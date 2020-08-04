import axios from "axios";
import { useEffect, useState } from "react";

import { API_URL } from "../common/apiUrl";
import { IApiFetchingResult } from "../common/interfaces";

export default function FetchApi<T>(url: string): IApiFetchingResult<T> {
    const apiUrl = API_URL + url;
    const [result, setResult] = useState<IApiFetchingResult<T>>({
        isLoaded: false,
        errors: undefined,
        result: [],
    });

    useEffect(() => {
        axios.get(apiUrl).then(
            (res) => {
                setResult({
                    isLoaded: true,
                    errors: undefined,
                    result: res.data,
                });
            },
            (error) => {
                setResult({ isLoaded: true, errors: error, result: [] });
            }
        );
    }, [url]);

    return result;
}
