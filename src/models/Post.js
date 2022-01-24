export class Post {
    constructor(data = {}) {
        this.imgUrl = data.imgUrl
        this.body = data.body
        this.id = data.id
        this.createdAt = data.createdAt
    }
}