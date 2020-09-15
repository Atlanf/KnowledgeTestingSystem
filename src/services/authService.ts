import { ApiWorker } from "./apiWorker";
import {
    IApiFetchingResult,
    ILoginDTO,
    IRegisterDTO,
    IRegisterResultDTO,
} from "../common/interfaces";

export class AuthService {
    signIn(login: string, password: string) {}

    register(
        registerModel: IRegisterDTO
    ): IApiFetchingResult<IRegisterResultDTO> {
        const apiWorker = new ApiWorker();

        return apiWorker.post("/user/register", registerModel);
    }

    logOut() {
        localStorage.removeItem("user");
    }
}
