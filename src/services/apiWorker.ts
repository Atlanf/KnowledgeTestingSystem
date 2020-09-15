import axios from "axios";
import { useEffect, useState } from "react";

import { API_URL } from "../common/apiUrl";
import {
    IApiFetchingResult,
    IErrors,
    IRegisterDTO,
    IRegisterResultDTO,
} from "../common/interfaces";

export class ApiWorker {
    public post<T>(
        url: string,
        data: any
    ): IApiFetchingResult<T> {
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

    public get<T>(url: string): IApiFetchingResult<T> {
        const apiUrl = API_URL + url;
        const [result, setResult] = useState<IApiFetchingResult<T>>({
            isLoaded: false,
            errors: undefined,
            result: [],
        });

        useEffect(() => {
            axios.get(apiUrl).then(
                (res) => {
                    if (Array.isArray(res.data)) {
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

    public registrationPost(data: IRegisterDTO): IRegisterResultDTO {
        const apiUrl = API_URL + "/user/register";

        useEffect(() => {
            axios.post(apiUrl).then((res) => {
                if (res.data) {
                    
                }
            });
        });

        return { successful: true, errors: [] };
    }
}
