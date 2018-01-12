import React from 'react'
import styles from './second.css'
import React3 from 'react-three-renderer'
import * as THREE from 'three'

var OrbitControls = require('three-orbit-controls')(THREE)


export default class Second extends React.Component {
  constructor(props) {
    super(props)
    this.cameraPosition = new THREE.Vector3(0,0,100)
    this.meshPosition = new THREE.Vector3(0, 0, 0)
    this.state = {
      cubeRotation: new THREE.Euler()
    }
    this._onAnimate = () => {
      this.setState({
        cubeRotation: new THREE.Euler(
        this.state.cubeRotation.x + 0.01,
        this.state.cubeRotation.y + 0.01,
        0)
      })
    }
  }

  componentDidMount() {
    const controls = new OrbitControls(this.refs.camera);
    this.controls = controls;
  }

  componentWillUnmount() {
    this.controls.dispose();
    delete this.controls;
  }

  render() {

  	var color = new THREE.Color("rgb(122,186,0)")
    const width = window.innerWidth * 0.8 // canvas width
    const height = window.innerHeight * 0.7 // canvas height
    const type = this.props.type
    var aspectratio = width / height;
    var cameraprops = {fov : 75, 
    									aspect : aspectratio,
                      near : 0.1, 
                      far : 1000,
                      position : this.cameraPosition,
                      lookAt : this.meshPosition }
    
    return (
    <div className={styles.first}>
      <React3
        mainCamera="maincamera"
        width={width}
        height={height}
        clearColor={0xf5f9ff}
        alpha={true}
        clearAlpha={0}
        onAnimate={this._onAnimate}
      >
        <scene>
          <perspectiveCamera
          	ref="camera"
            name="maincamera"
            {...cameraprops}
          />
          <mesh 
            rotation={this.state.cubeRotation}
            position={this.meshPosition}>
            <torusKnotGeometry
              radius={50}
              tube={10}
              radialSegments={50}
              tubularSegments={20}
            />
            <meshPhongMaterial 
              alphaTest={0.5}
              vertexColors={THREE.FaceColors} 
              color={color} />
          </mesh>
          <ambientLight intensity={.6} />
          <pointLight 
            color={0xFFFFFF}
            distance={10000} 
            position={new THREE.Vector3(3, 3, 3)} 
          />
        </scene>
      </React3>
    </div>  
    )}
}
