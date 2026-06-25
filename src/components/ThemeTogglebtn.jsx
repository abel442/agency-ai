import assets from '../assets/assets.js'

const ThemeTogglebtn = ({ theme, setTheme }) => {
  return (
    <div>
      <button className="cursor-pointer focus:outline-none flex items-center justify-center">
        {theme === 'dark' ? (
          <img
            onClick={() => setTheme('light')}
            src={assets.sun_icon}
            className="w-8.5 h-8.5 p-1.5 border border-gray-500 rounded-full hover:bg-gray-800 transition-colors"
            alt="Sun"
          />
        ) : (
          <img
            onClick={() => setTheme('dark')}
            src={assets.moon_icon}
            className="w-8.5 h-8.5 p-1.5 border border-gray-500 rounded-full hover:bg-gray-100 transition-colors"
            alt="Moon"
          />
        )}
      </button>
    </div>
  )
}

export default ThemeTogglebtn