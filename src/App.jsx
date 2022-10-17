import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header/Header'
import Meme from './components/Meme/Meme'
import Picture from './components/Picture/Picture'
import Data from './assets/memeData'
function App() {
  
  
    
    
    
    // const meme = <Picture
    // item={randomElement}/>

  return (
    <div className="my-20 mx-auto flex flex-col w-[800px] justify-center items-center border border-2">
      <Header />
    <div className="">
      <Meme />
      
      </div>
    </div>
  )
}

export default App

