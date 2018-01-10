import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// import { Match } from 'react-router'
import 'normalize.css'

// import styles from './App.css'
import Background from './components/Background/background'
// import Circles from './components/Circles/circles'
// import Tabone from './components/Tabone/tabone'

const App = () => (
  <BrowserRouter>
    <div>
      <Background />
    </div>
  </BrowserRouter>
)

export default App
