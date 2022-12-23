import { AxiosInstance } from "axios";
import { buildHttpClient } from "../common/http-client";
import { User } from "../models/user.model";

class UserService {
    private httpClient: AxiosInstance;
    constructor() {
        const apiUrl = process.env.diarioApi as string;
        this.httpClient = buildHttpClient(apiUrl)
    }

    async consultarUsuarios(): Promise<User[]> {
        return await this.httpClient.get("/users");
    }

    async consultarUsuarioPeloId() { }

    async criarUsuario() { }
}

const userService = new UserService();
export { userService }