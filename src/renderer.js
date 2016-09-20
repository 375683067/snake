import './styles/canvasDecoration.css';
export default class Renderer {
    /**
     *
     */
    constructor(canvasId) {
        var canvas = document.querySelector(canvasId);
        this.context = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;
        this.elements = [];
        this.$stopFunction = function () {};
    }
    /**
     *
     */
    $render() {
        var i, len;

        for (i = 0, len = this.elements.length; i < len; i++) {
            this.elements[i].clear(this.context);
            this.elements[i].update(this);
            this.elements[i].render(this.context);
        }
    }
    /**
     *
     * @param {Object} element
     * @return {Array}
     */
    getElements(element) {
        return this.elements;
    };
    /**
     *
     * @param {Object} element
     */
    addElement(element) {
        this.elements.push(element);
        if (typeof element.init === 'function') {
            element.init(this);
        }
    };

    /**
     * start animation
     * @param {number} fps
     */
    start(fps) {
        var that = this;
        var intervalId = null;
        if (typeof fps === 'undefined') {
            console.warn('fps shouldn\'t be undefined');
            return false;
        }
        if (fps < 60) {
            intervalId = setInterval(function () {
                that.$render();
            }, 1000 / fps);
            this.$stopFunction = function () {
                clearInterval(intervalId);
            };
        } else {
            // todo run animation with request animation frame
        }
    }
    /**
     * stop drawing
     */
    stop() {
        this.$stopFunction();
    };
}