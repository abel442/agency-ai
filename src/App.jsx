import React from 'react'
import Navbar from './components/Navbar'
const App = () => {

  const [theme, setTheme] = useState('light ')
  return (
    <div className='dark:bg-black relative'>
      <Navbar />
    </div>
  )
}

export default App