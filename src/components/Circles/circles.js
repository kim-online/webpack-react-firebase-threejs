import React from 'react'
import styles from './circles.css'

const Circles = () => (
  <div>
    <SingleCircle />
  </div>
)

class SingleCircle extends React.Component {
  render () {
    return (
      <div>
        <button type='button' className={styles.buttonOne} />
        <button type='button' className={styles.buttonTwo} />
        <button type='button' className={styles.buttonThree} />
      </div>
    )
  }
}

export default Circles
