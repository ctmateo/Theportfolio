import {useEffect, useRef} from "react";
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const Home = () => {
    const mountRef = useRef(null)
    useEffect(() =>{
        const currentMount = mountRef.current
        //SCENE
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(25,currentMount.clientWidth / currentMount.clientHeight,0.1,1000)
        scene.add(camera)

        camera.position.z = 4

        //RENDERER
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight)
        
        currentMount.appendChild(renderer.domElement)

        //Controls
        const controls = new OrbitControls(camera, renderer.domElement)


        //CUBE
        const cube = new THREE.Mesh(new THREE.BoxBufferGeometry(1,1,1),
        new THREE.MeshBasicMaterial())

        scene.add(cube)

        //RENDER THE SCENE
        const animate = () =>{
            renderer.render(scene,camera)
            requestAnimationFrame(animate)
        }
        animate()
        

        //CLEAN UP SCENE
        return () =>{
            currentMount.removeChild(renderer.domElement)
        }


    },[])
    return(
        <div className={"home-section"} ref={mountRef} style ={{width:'100%', height:'100vh'}}></div>

    )
}

export default Home