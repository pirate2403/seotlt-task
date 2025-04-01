import { Post } from '@/entities/post';
import { LocalStorageApi } from '@/shared/api';

export class CreateEditPostApi {
  private baseApi = new LocalStorageApi('/posts');

  constructor() {
    this.createPost = this.createPost.bind(this);
    this.updatePost = this.updatePost.bind(this);
  }

  async createPost(post: Post): Promise<Post> {
    return await this.baseApi.create<Post>(post);
  }

  async updatePost(post: Post): Promise<Post> {
    return await this.baseApi.update<Post>(post.id, post);
  }
}

export const createEditPostApi = new CreateEditPostApi();
