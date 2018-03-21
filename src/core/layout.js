/*global*/
const EventEmitter = require('events');
var _width, _height;
var savedDimensions = {pw: 0, ph:0};
class Layout extends EventEmitter {
    constructor(_config) {
        super();
        document.querySelector(_config.container).classList.add('rescale_reposition');
        console.log('layout constructor: ', _config);
        _width = _config.width;
        _height = _config.height;
        this.init(_config);
        this.saveDimensions();
        window.addEventListener('resize', this.resize.bind(this));
        this.resize();
    }
    init(config) {
        this.config = {
            height: this.isPortrait() ? config.height : config.width,
            width:  this.isPortrait() ? config.width : config.height,
            container: config.container
        }
    }
    isPortrait() {
        var portrait;
        if (window.innerWidth >= window.innerHeight) {
            portrait = false;
        } else {
            portrait = true;
        }
        return portrait;
    }
    saveDimensions() {
        savedDimensions.w = this.isPortrait() ? window.innerWidth : window.innerHeight;
        savedDimensions.h = this.isPortrait() ? window.innerHeight : window.innerWidth;
    }
    resize() {
        if (this.isPortrait()) {
            document.body.classList.add('portrait');
            document.body.classList.remove('landscape');
            document.querySelector(this.config.container).style.width = _width+'px';
            document.querySelector(this.config.container).style.height = _height+'px';
        } else {
            document.body.classList.add('landscape');
            document.body.classList.remove('portrait');
            document.querySelector(this.config.container).style.width = _height+'px';
            document.querySelector(this.config.container).style.height = _width+'px';
        }

        this.init(this.config);
        this.saveDimensions();

        // this fixes in-app resizing on iphone x
        var newWidth = this.isPortrait() ? savedDimensions.w : savedDimensions.h;
        var newHeight = this.isPortrait() ? savedDimensions.h : savedDimensions.w;

        var scale;
        var aspect = newWidth / newHeight;

        if (aspect >= (this.config.width/this.config.height)) {
            scale = this.config.height / newHeight;
        } else {
            scale = this.config.width / newWidth;
        }

        document.querySelector(this.config.container).style.transform = 'scale('+ 1/scale +') translateX(-50%) translateY(-50%)';
    }
}

module.exports = Layout;