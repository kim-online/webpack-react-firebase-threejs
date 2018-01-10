import React from 'react'
import styles from './circles.css'

// Each button get css props from both circles.css(styles.button) & individual props from customStyles in background.js.
class Circle extends React.Component {
  render () {
    return (
      <div>
        <button type='button' className={styles.button + ' ' + this.props.customStyles} />
      </div>
    )
  }
}

export default Circle
