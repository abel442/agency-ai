import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import hero from './components/Hero'
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
    <div className='dark:bg-black min-h-screen relative'>
      <Navbar theme={theme} setTheme={setTheme} />

      <hero />
    </div>
  )
}

export default App