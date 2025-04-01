import { Post } from '@/entities/post';
import { LocalStorageApi } from '@/shared/api';

export class PostListApi {
  private baseApi = new LocalStorageApi('/posts');

  constructor() {
    this.getPosts = this.getPosts.bind(this);
  }

  async getPosts(): Promise<Post[]> {
    return await this.baseApi.read<Post>();
  }
}

export const postListApi = new PostListApi();
