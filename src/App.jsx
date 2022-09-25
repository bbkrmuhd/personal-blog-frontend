import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import {Home, About, Login} from './pages'


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path='/login' element={<Login />} />
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
