import React from 'react'
import styles from './background.css'
import Circle from '../Circles/circles'

const Background = () => (
  <div>
    <div className={styles.background} />
    <Circle customStyles={styles.one} />
    <Circle customStyles={styles.two} />
    <Circle customStyles={styles.three} />
  </div>
)

export default Background
