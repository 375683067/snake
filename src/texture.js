export default class Texture {
    constructor(x, y, width, height) {
        this.x = x || 0;
        this.y = y || 0;
        this.width = width || 0;
        this.height = height || 0;
    }
    /**
     *
     * @param {object} renderer
     */
    init(renderer) {
    };
    /**
     *
     */
    render(context) {
        context.fillStyle = 'blue';
        context.fillRect(this.x, this.y, this.width, this.height);
    };
    /**
     *
     */
    update(renderer) {
    };
    /**
     * @param context
     */
    clear(context) {
    };
}