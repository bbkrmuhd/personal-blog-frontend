import { Routes, Route} from "react-router-dom";
import './App.css'
import {Home, About, Login, PostList, PostDetail, Admin, TagList, Layout, AdminPosts,
 AdminComments, AdminCreatePost, AdminTags, NotFound, Category, BaseLayout, } from './pages'
 import { RequireAuth } from "./components";


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseLayout/>}>
          <Route path="/" element={<Layout/>} >\
          <Route path='/' element={<Home/>} />
          <Route path='posts' element={<PostList/>} />
          <Route path='posts/tag/:tagSlug' element={<TagList/>} />
          <Route path='category/:categorySlug' element={<Category/>}/>
          </Route>
          <Route path='about' element={<About />} />
        </Route>

        <Route path='login' element={<Login />} />

        <Route path='sirri' element={<RequireAuth><Admin /></RequireAuth>} >
           <Route path='posts' element={<AdminPosts />} />
           <Route path='posts/write' element={<AdminCreatePost />} />
          
           <Route path='comments' element={<AdminComments />} />
           <Route path='tags' element={<AdminTags />} />
        </Route>
        <Route path='/post/detail/:postSlug' element={<PostDetail/>} />

        <Route
        path="*"
        element={
          <NotFound/>
        }
      />
      </Routes>
    </>
     
  )
}
