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
import First from './components/First/first'
import Second from './components/Second/second'
import Third from './components/Third/third'

const App = () => (
  <Router>
    <div>
      <Background />
      <Link to="/one"><Circle customStyles={styles.one} /></Link>
      <Link to="/two"><Circle customStyles={styles.two} /></Link>
      <Link to="/three"><Circle customStyles={styles.three} /></Link>

      <Route exact path="/" />
      <Route path="/one" component={First} />
      <Route path="/two" component={Second} />
      <Route path="/three" component={Third} />
    </div>
  </Router>
)

export default App
