import BaseService from './BaseService.es6';
import Hammer from 'hammerjs';

/**
 * 触摸移动画布内容
 */
export default class MoveByGesture extends BaseService{
    hammertime;
    constructor(core){
        super(core)
    }
    init(){
        this.hammertime = new Hammer(this.core.canvas);
        this.hammertime.on('pan', function(ev) {
            console.log(ev)
        });
    }
    destroy(){
        this.hammertime.destroy();
    }
}