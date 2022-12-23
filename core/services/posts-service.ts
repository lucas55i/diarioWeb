import { AxiosInstance } from "axios";
import { buildHttpClient } from "../common/http-client";

class PostService {
    private httpClient: AxiosInstance;
    constructor() {
        const apiUrl = process.env.diarioApi as string;
        this.httpClient = buildHttpClient(apiUrl)
    }

    async ConsultarPost() { }

    async criarPosts() { }
}

const postService = new PostService();
export { postService }