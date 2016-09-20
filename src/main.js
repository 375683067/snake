import Renderer from './renderer.js';
import Snake from  './snake.js';

var renderer = new Renderer('canvas');
var snake = new Snake();
renderer.addElement(snake);
renderer.start(2);