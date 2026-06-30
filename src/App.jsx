import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trustedby from './components/Trustedby'
import Services from './components/service'
import Ourwork from './components/Ourwork'
import Teams from './components/Teams'
import Contactus from './components/Contactus'
import Footer from './components/Footer'
const App = () => {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  return (
    <div className='dark:bg-black h-40 relative'>
      <Navbar theme={theme} setTheme={setTheme} />

      <Hero />
      <Trustedby />
      <Services />
      <Ourwork />
      <Teams />
      <Contactus/>
      <Footer />
    </div>
  )
}

export default App