import { Post } from '@/entities/post';
import { LocalStorageApi } from '@/shared/api';

class PostApi {
  private baseApi = new LocalStorageApi('/posts');

  constructor() {
    this.getPostById = this.getPostById.bind(this);
  }

  async getPostById(id: string): Promise<Post> {
    return await this.baseApi.readById<Post>(id);
  }
}

export const postApi = new PostApi();
