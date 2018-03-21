/*global*/
import Visualisation from './creative/Visualisation';
import Layout from './core/layout';
import loadJS from 'load-js';

var creative = {
    defaults: {
        container: '.container'
    },
    options: {},
    config: {container: '', width: 320, height: 568},
    init: function(opts) {

        for(var i in opts){
            this.options[i] = {
                value: opts[i],
                enumerable: true,
                writeable: true,
                configurable: true
            }
        }
        this.config = Object.create(this.defaults, this.options);

        let layout = new Layout(this.config);


        /**
         * Load Three.js scripts here as they aren't well supported on npm
         */
        var arr_scripts_cdn = [
            'https://s3.eu-west-1.amazonaws.com/cs-international/autoblog/scripts/three.js',
            'https://threejs.org/examples/js/controls/OrbitControls.js',
            'https://threejs.org/examples/js/controls/DeviceOrientationControls.js',
            'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TweenMax.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/TimelineMax.min.js',
            'https://threejs.org/examples/js/GPUParticleSystem.js',
            'https://cdnjs.cloudflare.com/ajax/libs/stats.js/r16/Stats.min.js',
            'https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js',
            'https://s3.eu-west-1.amazonaws.com/cs-international/autoblog/scripts/Car.js',
            'https://s3.eu-west-1.amazonaws.com/cs-international/autoblog/scripts/BinaryLoader.js'
        ];

        let loadArray = [];
        for (let value of arr_scripts_cdn) {
            let loadObj = {async: false, url: value};
            loadArray.push(loadObj);
        }
        loadJS( loadArray )
            .then(() => {
                console.log("scripts loaded");
                this.start();
            });
    },
    start() {
        let visualisation = new Visualisation(this.config);
    }
};


export default creative;