import { AxiosInstance } from "axios";
import { buildHttpClient } from "../common/http-client";

class UserService {
    private httpClient: AxiosInstance;
    constructor() {
        const apiUrl = process.env.diarioApi as string;
        this.httpClient = buildHttpClient(apiUrl)
    }

    async consultarUsuarios() { }

    async consultarUsuarioPeloId() { }

    async criarUsuario() { }
}

const userService = new UserService();
export { userService }