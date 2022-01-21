import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class PostsService {

    async getAllPosts(query = '') {
        const res = await api.get('api/posts' + query)
        logger.log(res.data)
        AppState.posts = res.data.posts
    }

    async createPost(newPost) {
        const res = await api.post('api/posts', newPost)
        logger.log(res.data.posts)
        AppState.posts.unshift(res.data)
    }
}

export const postsService = new PostsService()