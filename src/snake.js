import {KEY_DOWN,KEY_LEFT,KEY_RIGHT,KEY_UP} from './constants/keyCodes.js';
import {range} from './helper.js';
import Tail from  './snakeTail.js';
import Texture from './texture.js';

export default class Snake extends Texture {
    constructor(...args) {
        super(...args);
        this.tail = new Tail();
        this.x_speed = 1;
        this.y_speed = 0;
        this.style = 'grey';
        this.parts = 20;
    }
    /**
     *
     * @param {object} renderer
     */
    init(renderer) {
        document.addEventListener('keydown', (e) => {
            this.x_speed = 0;
            this.y_speed = 0;
            switch (e.keyCode) {
                case KEY_UP:
                    this.y_speed = -1;
                    break;
                case KEY_RIGHT:
                    this.x_speed = 1;
                    break;
                case KEY_DOWN:
                    this.y_speed = 1;
                    break;
                case KEY_LEFT:
                    this.x_speed = -1;
                    break;
            }
        });
        this.width = renderer.width / this.parts;
        this.height = renderer.height / this.parts;
    };
    /**
     * @param {canvas} context
     */
    render(context) {
        context.fillStyle = this.style;
        context.fillRect(this.x * this.width, this.y * this.height, this.width, this.height);
    };
    /**
     *
     */
    update() {
        this.x = range(this.x_speed + this.x, 0, this.parts - 1);
        this.y = range(this.y_speed + this.y, 0, this.parts - 1);
    };
    /**
     *
     * @param context
     */
    clear(context) {
        context.clearRect(this.x * this.width, this.y * this.height, this.width, this.height);
    };
}