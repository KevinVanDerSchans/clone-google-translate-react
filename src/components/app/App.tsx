import { useStore } from '../../hooks/useStore'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const { fromLanguage, setFromLanguage } = useStore()

  return (
    <div className='app'>
      <h1>Google Translate</h1>

      <button
        onClick={() => {
          setFromLanguage('es')
        }}
      >
        Cambiar a Español
      </button>

      {fromLanguage}
    </div>
  )
}

export default App
