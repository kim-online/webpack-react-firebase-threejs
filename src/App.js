import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import 'normalize.css'

import styles from './App.css'
import Background from './components/Background/background'
import Circle from './components/Circles/circles'

const App = () => (
  <Router>
    <div>
      <Background />
      <Circle customStyles={styles.one} />
      <Circle customStyles={styles.two} />
      <Circle customStyles={styles.three} />
    </div>
  </Router>
)

export default App
