import React from 'react'
import './App.css'

import { Footer, Header, Blog, Possibility, Features, WhatGPT3 } from './Containers'
import { CTA, Brand, NavBar } from './Components'

const App = () => {
  return (
    <div className = "App">
      <div className = "gradient__bg">
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
