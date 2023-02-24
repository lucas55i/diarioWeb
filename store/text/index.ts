import { CLightMode } from "@chakra-ui/vue";
import { AddPost, Post } from "~/core/models/post.model";
import { postService } from "~/core/services/posts-service";

interface PostState {
    posts: Array<Post>
}

export const state = (): PostState => ({
    posts: []
})

export const mutations = {
    setUser(state: PostState, posts: Array<Post>) {
        state.posts = posts;
    },
}

export const actions = {
    consultarPosts(contex: any) {
        return new Promise<void>((resolve, reject) => {
            contex.commit("setUser", [])

            postService.consultarPosts().then((result) => {
                resolve();
                contex.commit("setUser", result)
            }).catch((err) => {
                reject(err)
                console.log('Error :>> ', err);
            }).finally(() => {

            })
        })
    },


    criarPost(contex: any, AddPost: AddPost) {
        return new Promise((resolve, reject) => {
            postService
                .criarPosts(AddPost)
                .then((post) => {
                    resolve(post)
                })
                .catch((err) => {
                    reject(err)
                    console.log(err)
                })
                .finally(() => {

                })
        })
    }
}
