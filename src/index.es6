/**
 * Created by 80011690 on 2018/1/5.
 */
import Util from './util.es6';

/**
 * 核心代码
 *
 */
export class Core {
    canvas=null;
    ctx=null;//canvas context
    //配置参数默认值
    defaultParams = {
    };

    /**
     *
     * @param canvas  画布dom元素
     * @param params  配置参数
     */
    constructor(canvas,params){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
    }

    /**
     * 根据图片地址绘制图片
     * @param path  路径
     * @param ctxParam   ctx.drawImaged的其他参数
     */
    drawImage(path,...ctxParam){
        Util.loadImage(path,(imgobj)=>{
            this.ctx.drawImage(imgobj,ctxParam)
        })
    }



}
