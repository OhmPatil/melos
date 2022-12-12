import { useState } from 'react'
import '../src/styles/App.css'
import Header from './sections/Header'
import Hero from './sections/Hero'
import PlayerControls from './sections/PlayerControls'

function App() {

  return (
    <div className="App">
      <Header/>
      <Hero/>
    </div>
  )
}

export default App
