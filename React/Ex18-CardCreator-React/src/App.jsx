import { useState, useEffect } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import  Navbar from "./components/Navbar"
import Main from './components/Main'
import './App.css'

function App() {

  return (
    <>
      <Navbar/>
      <Main/>
    </>
  )
}

export default App
