import { ApiWorker } from "./apiWorker";
import {
    IApiFetchingResult,
    IErrors,
    ILoginDTO,
    IRegisterDTO,
    IRegisterResultDTO,
} from "../common/interfaces";
import { ErrorParser } from "./errorParser";

export class AuthService {
    signIn(login: string, password: string) {}

    public register(
        registerModel: IRegisterDTO
    ): IApiFetchingResult<IRegisterResultDTO> {
        let registerResult: IApiFetchingResult<IRegisterResultDTO>;

        const apiWorker: ApiWorker = new ApiWorker();
        const apiResponse: IRegisterResultDTO = apiWorker.registrationPost(
            registerModel
        );

        console.log("Start of registration");
        if (apiResponse) {
            if (apiResponse.successful) {
                registerResult = {
                    result: [apiResponse],
                    errors: undefined,
                    isLoaded: true,
                };
            } else {
                registerResult = {
                    result: [],
                    errors: apiResponse.errors as IErrors,
                    isLoaded: true,
                };
            }

            return registerResult;
        }

        return { isLoaded: false, errors: undefined, result: [] };
    }

    logOut() {
        localStorage.removeItem("user");
    }
}
