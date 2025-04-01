import { Post } from '@/entities/post';
import { LocalStorageApi } from '@/shared/api';

class RemovePostApi {
  private baseApi = new LocalStorageApi('/posts');

  constructor() {
    this.removePost = this.removePost.bind(this);
  }

  async removePost(id: string): Promise<void> {
    await this.baseApi.delete<Post>(id);
  }
}

export const removePostApi = new RemovePostApi();
