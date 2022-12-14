import { useState } from 'react'
import '../src/styles/App.css'
import Header from './sections/Header'
import Hero from './sections/Hero'
import PlayerControls from './sections/PlayerControls'

function App() {

  return (
    <div className="App md:h-screen py-6 md:py-0">
      <Header/>
      <Hero/>
    </div>
  )
}

export default App
