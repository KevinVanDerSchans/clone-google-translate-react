import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useReducer } from 'react'
import { State } from '../../types'

const initialState: State = {
  fromLanguage: 'auto',
  toLanguage: 'en',
  fromText: '',
  result: '',
  loading: false,
}

function reducer(state: State, action) {
  const { type, payload } = action

  if (type === 'INTERCHANGE_LANGUAGES') {
    return {
      ...state,
      fromLanguage: state.toLanguage,
      toLanguage: state.fromLanguage,
    }
  }

  if (type === 'SET_FROM_LANGUAGE') {
    return {
      ...state,
      fromLanguage: payload,
    }
  }

  if (type === 'SET_TO_LANGUAGE') {
    return {
      ...state,
      toLanguage: payload,
    }
  }

  if (type === 'SET_FROM_TEXT') {
    return {
      ...state,
      loading: true,
      fromText: payload,
      result: '',
    }
  }

  if (type === 'SET_RESULT') {
    return {
      ...state,
      loading: true,
      result: payload,
    }
  }

  return state
}

function App() {
  const [] = useReducer(reducer, initialState)
  return (
    <>
      <div className='app'>
        <h1>Clon - Google Translate</h1>
      </div>
    </>
  )
}

export default App
