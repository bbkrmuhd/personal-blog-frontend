import { useState } from 'react'
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
        <Route path='/posts/list' element={<PostList/>} />
        <Route path='/post/detail' element={<PostDetail/>} />
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
