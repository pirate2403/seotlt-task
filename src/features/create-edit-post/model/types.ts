import { Post } from '@/entities/post';

export type FormValues = Pick<Post, 'title' | 'text'>;
