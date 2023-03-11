import React from "react";
import { Routes, Route } from "react-router-dom";
import './App.css'
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import { BallTriangle } from  'react-loader-spinner'
import { RequireAuth } from "./components";

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Login = React.lazy(() => import('./pages/Login'));
const PostList = React.lazy(() => import('./pages/PostList'));
const PostDetail = React.lazy(() => import('./pages/PostDetail'));
const Admin = React.lazy(() => import('./pages/Admin'));
const TagList = React.lazy(() => import('./pages/TagList'));
const Layout = React.lazy(() => import('./pages/Layout'));
const AdminPosts = React.lazy(() => import('./pages/admin/AdminPosts'));
const AdminComments = React.lazy(() => import('./pages/admin/AdminComments'));
const AdminCreatePost = React.lazy(() => import('./pages/admin/AdminCreatePost'));
const AdminTags = React.lazy(() => import('./pages/admin/AdminTags'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Category = React.lazy(() => import('./pages/Category'));
const BaseLayout = React.lazy(() => import('./pages/BaseLayout'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
})

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
      <React.Suspense fallback={
      <div className="dark:bg-gray-700" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
       <BallTriangle
                  height={100}
                  width={100}
                  radius={5}
                  color="#008B8B"
                  ariaLabel="ball-triangle-loading"
                  visible={true}
                />
      </div>}>
          <Routes>
            <Route path="/" element={<BaseLayout />}>
              <Route path="/" element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='posts' element={<PostList />} />
                <Route path='posts/tag/:tagSlug' element={<TagList />} />
                <Route path='category/:categorySlug' element={<Category />} />
              </Route>
              <Route path='posts/detail/:postSlug' element={<PostDetail />} />
              <Route path='about' element={<About />} />
            </Route>

            <Route path='login' element={<Login />} />

            <Route path='sirri' element={<RequireAuth><Admin /></RequireAuth>} >
              <Route path='posts' element={<AdminPosts />} />
              <Route path='posts/write' element={<AdminCreatePost />} />
              <Route path='comments' element={<AdminComments />} />
              <Route path='tags' element={<AdminTags />} />
            </Route>
           

            <Route
              path="*"
              element={<NotFound />}
            />
          </Routes>
        </React.Suspense>
      </>
      <ReactQueryDevtools initialIsOpen={true} position='bottom-right' />
    </QueryClientProvider>
  )
}