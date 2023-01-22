import { Post } from "~/core/models/post.model";
import { postService } from "~/core/services/posts-service";

interface PostState {
    posts: Array<Post>
}

export const state = (): PostState => ({
    posts: []
})

export const mutations = {
    setUser(state: PostState, posts: Array<Post>){
        state.posts = posts;
    },
}

export const actions = {
    consultarPosts(contex: any){
        return new Promise<void>((resolve, reject) => {
            contex.commit("setUser", [])

            postService.consultarPosts().then((result) => {
                resolve();
                contex.commit("setUser", result)
            }).catch((err) =>  {
                reject(err)
                console.log('Error :>> ', err);
            }).finally(() => {
                console.log("-------");
                console.log('CHAMA ENCERRADA');
                console.log("-------");
            })
        })
    }
}
