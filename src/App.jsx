import { useState } from 'react'
import '../src/styles/App.css'
import Header from './sections/Header'
import Hero from './sections/Hero'
import PlayerControls from './sections/PlayerControls'

function App() {

  return (
    <div className="App md:h-screen">
      <Header/>
      <Hero/>
    </div>
  )
}

export default App
