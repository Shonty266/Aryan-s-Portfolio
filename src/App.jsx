import React from 'react'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Project/Project'
import Footer from './components/Footer/Footer'
import Scroll from './components/Scroll/Scroll'

// import Transition from './components/Transition/Transition'

const App = () => {


  return (
    <div>
      <Scroll />
      <Navbar/> 
<Hero />
<Projects />
<Footer />
    </div>
  )
}

export default App