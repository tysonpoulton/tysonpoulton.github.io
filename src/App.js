import React from 'react'
import Intro from './sections/Intro'
import About from './sections/About'
import CategoryContextProvider from './context/Category'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

const App = () => {
  return (
    <div className="app">
      <Intro />
      <CategoryContextProvider>
        <About />
      </CategoryContextProvider>
      <Projects />
      <Contact />
    </div>
  )
}

export default App

