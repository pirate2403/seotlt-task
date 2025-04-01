import { ErrorPage } from '@/pages/error';
import { NewPostPage } from '@/pages/new-post';
import { NotFoundPage } from '@/pages/not-found';
import { PostPage } from '@/pages/post';
import { PostEditPage } from '@/pages/post-edit';
import { PostsPage } from '@/pages/posts';
import { Header } from '@/widgets/header';
import { MainLayout } from '@/widgets/layout';
import { JSX } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { useFontCoefficient } from './hooks';
import './styles/index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout header={<Header />} />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <PostsPage /> },
      { path: 'post/:id', element: <PostPage /> },
      { path: 'edit/:id', element: <PostEditPage /> },
      { path: 'new', element: <NewPostPage /> },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export function App(): JSX.Element {
  useFontCoefficient();

  return <RouterProvider router={router} />;
}
