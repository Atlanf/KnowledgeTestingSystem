import axios from "axios";
import { useEffect, useState } from "react";

import { API_URL } from "../common/apiUrl";
import { IApiFetchingResult } from "../common/interfaces";
import { isArray } from "util";

export function apiPost<T>(url: string, data: any): IApiFetchingResult<T> {
    const apiUrl = API_URL + url;
    const [result, setResult] = useState<IApiFetchingResult<T>>({
        isLoaded: false,
        errors: undefined,
        result: [],
    });

    useEffect(() => {
        axios.post(apiUrl, data).then(
            (res) => {
                if (res.data) {
                    setResult({
                        isLoaded: true,
                        errors: undefined,
                        result: res.data,
                    });
                }
            },
            (error) => {
                setResult({
                    isLoaded: true,
                    errors: error,
                    result: [],
                });
            }
        );
    }, [url, data]);

    return result;
}

export function apiGet<T>(url: string): IApiFetchingResult<T> {
    const apiUrl = API_URL + url;
    const [result, setResult] = useState<IApiFetchingResult<T>>({
        isLoaded: false,
        errors: undefined,
        result: [],
    });

    useEffect(() => {
        axios.get(apiUrl).then(
            (res) => {
                if (isArray(res.data)) {
                    setResult({
                        isLoaded: true,
                        errors: undefined,
                        result: res.data,
                    });
                } else {
                    setResult({
                        isLoaded: true,
                        errors: undefined,
                        result: Array<T>(res.data),
                    });
                }
            },
            (error) => {
                setResult({ isLoaded: true, errors: error, result: [] });
            }
        );
    }, [url]);

    return result;
}