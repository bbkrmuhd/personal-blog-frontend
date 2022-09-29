import { Routes, Route} from "react-router-dom";
import './App.css'
import {Home, About, Login, PostList, PostDetail} from './pages'


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/posts' element={<PostList/>} />
        <Route path='/post/detail/:postSlug' element={<PostDetail/>} />
        <Route path='tag/:tagSlug' element={<PostList/>} />
        <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
      </Routes>
    </>
     
  )
}
