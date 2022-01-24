import { AppState } from "../AppState"
import { Post } from "../models/Post"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { api } from "./AxiosService"

class PostsService {
    async getAllPosts(query = '') {
        const res = await api.get('api/posts' + query)
        logger.log(res.data)
        AppState.posts = res.data.posts
        AppState.totalPages = res.data.totalPages
    }

    async createPost(newPost) {
        const res = await api.post('api/posts', newPost)
        logger.log(res.data.posts)
        AppState.posts.unshift(res.data)
    }

    async removePost(id) {
        const res = await api.delete('api/posts/' + id)
        logger.log(res.data)
        AppState.posts = AppState.posts.filter(p => p.id != post.id)
    }

    async likePost(id) {
        const res = await api.post(`api/posts/${id}/like`)
        logger.log(res.data)
    }
    async filterPosts(searchTerm, page) {
        const res = await api(`api/posts?query=${searchTerm}&page=${page}`)
        console.log('filter post res', res)
        // AppState.searchResults = res.data.posts(p => new Post(p))
        AppState.totalPages = res.data.total_pages
        AppState.currentPage = res.data.page
    }
}

export const postsService = new PostsService()