/*global Hammer TweenMax THREE Back Quad Linear Elastic trackMe $*/

import {EventEmitter} from 'events';
var screenWidth, screenHeight, scene, renderer, camera, controls;

class Experience extends EventEmitter {

    constructor(config) {
        super();
        this.config = config;
        this.init()
    }
    init() {
        /**
         * Setup Three.js scene
         * @type {Element}
         */
        let container = document.querySelector( this.config.container );
        screenWidth = document.documentElement.clientWidth;
        screenHeight = document.documentElement.clientHeight;
        scene = new THREE.Scene();
        renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( screenWidth, screenHeight );
        renderer.sortObjects = false;
        container.appendChild( renderer.domElement );
        camera = new THREE.PerspectiveCamera( 60, screenWidth / screenHeight, 1, 15000 );

        if (!this.config.gyro) {
            console.log('no gyro');
            controls = new THREE.OrbitControls( camera, renderer.domElement );
            controls.enableZoom = true;
            camera.position.z = 0;
            camera.position.y = 1222.8360659397056;
            camera.position.z = -1060.9657061668715;
            camera.lookAt(new THREE.Vector3())
        } else {
            controls = new THREE.DeviceOrientationControls( camera );
            var initialPosition = new THREE.Vector3(0, 1222.8360659397056, 1746.1080637184577);
            //camera.position.copy(initialPosition);
        }
        let size = 20000;
        let divisions = 100;
        let gridHelper = new THREE.GridHelper( size, divisions, 0x3b3b3b, 0x3b3b3b );
        scene.add( gridHelper );
        gridHelper.position.y = -100;
        gridHelper.position.x = 5;

        var geometry = new THREE.BoxGeometry( 100, 100, 100 );

        var material = new THREE.MeshPhongMaterial( { depthWrite: true, map: THREE.ImageUtils.loadTexture(require('../img/crate.jpg')) } );
        var object = new THREE.Mesh( geometry, material );
        object.castShadow = true;
        object.receiveShadow = true;
        scene.add( object );
        object.position.x = 0;
        object.position.y = 0;
        object.position.z = 0;

        /**
         * Lights
         */
        var ambientLight = new THREE.AmbientLight( 0xcccccc, 0.5 );
        scene.add( ambientLight );

        var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.8 );
        directionalLight.position.set( 1, 10, 0 ).normalize();
        scene.add( directionalLight );

        this.animate();
    }
    animate() {

        controls.update();
        renderer.render( scene, camera );


        requestAnimationFrame( this.animate.bind(this) );
    }

}

export default Experience;

/**
 * Helpers
 */
(function(){Math.clamp=function(a,b,c){return Math.max(b,Math.min(c,a));}})();

function map( x,  in_min,  in_max,  out_min,  out_max){
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}
// Converts from degrees to radians.
Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
};

// Converts from radians to degrees.
Math.degrees = function(radians) {
    return radians * 180 / Math.PI;
};