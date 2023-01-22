import { AxiosInstance } from "axios";
import { buildHttpClient } from "../common/http-client";
import { AddPost, Post } from "../models/post.model";

class PostService {
    private httpClient: AxiosInstance;
    constructor() {
        const apiUrl = process.env.diarioApi as string;
        this.httpClient = buildHttpClient(apiUrl)
    }

    async consultarPosts(): Promise<Post[]> {
        return await this.httpClient.get("/posts");
     }

    async criarPosts(post: AddPost) {
        return await this.httpClient.post("/posts", post)
     }
}

const postService = new PostService();
export { postService }