import { AxiosInstance } from "axios";
import { buildHttpClient } from "../common/http-client";
import { Post } from "../models/post.model";

class PostService {
    private httpClient: AxiosInstance;
    constructor() {
        const apiUrl = process.env.diarioApi as string;
        this.httpClient = buildHttpClient(apiUrl)
    }

    async consultarPosts(): Promise<Post[]> {
        return await this.httpClient.get("/posts");
     }

    async criarPosts() { }
}

const postService = new PostService();
export { postService }