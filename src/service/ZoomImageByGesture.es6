import BaseService from './BaseService.es6';
import Hammer from 'hammerjs';

/**
 * 手势缩放图片内容
 */
export default class ZoomByGesture extends BaseService{
    hammertime;
    constructor(core){
        super(core)
    }
    init(){
        this.hammertime = new Hammer(this.core.canvas);
        this.hammertime.get('pinch').set({ enable: true });
        this.hammertime.on('pinch', function(ev) {
            console.log(ev);
        });
        this.hammertime.on('pinchstart', function(ev) {
            console.log(ev);
        });
        this.hammertime.on('pan', function(ev) {
            console.log(ev)
        });
    }
    destroy(){
        this.hammertime.destroy();
    }
}