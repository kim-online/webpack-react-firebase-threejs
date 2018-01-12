import React from 'react'
import { render } from 'react-dom'
import * as firebase from 'firebase'

import './base.css'
import App from './App'

var config = {
  apiKey: 'AIzaSyDZpGDbIAbYE1QspljmdfLO57QpaVa13MA',
  authDomain: 'webpack-react-firebase-threejs.firebaseapp.com',
  databaseURL: 'https://webpack-react-firebase-threejs.firebaseio.com',
  projectId: 'webpack-react-firebase-threejs',
  storageBucket: 'webpack-react-firebase-threejs.appspot.com',
  messagingSenderId: '586479901249'
}
firebase.initializeApp(config)

render(<App />, document.getElementById('app'))
