/**
 * Created by 80011690 on 2018/1/5.
 */

/**
 * 图层
 *
 */
let layerIdCount = 0;
export default class Layer {
    id;
    canvas=null;
    ctx=null;//canvas context
    width;
    height;
    contentArea={};//内容区域、包括超出画布范围的内容
    //配置参数默认值
    defaultParams = {
        name:'',
        width:0,
        height:0,
    };


    /**
     * 宽高
     * @param width
     * @param height
     */
    constructor(param){

        Object.assign(this.defaultParams,param);
        this.canvas = document.createElement('canvas');

        this.width=this.defaultParams.width;
        this.height=this.defaultParams.height;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx = this.canvas.getContext('2d');
        this.contentArea = {
            x:0,
            y:0,
            width:this.canvas.width,
            height:this.canvas.height
        };
        if(param.id){
            this.id = id;
        }else{
            this.id = layerIdCount++;
            this.defaultParams.id=this.id;
        }
    }


    /**
     * 获取可视区域内的ImageData
     */
    getImageData(){
        return this.ctx.getImageData(0,0,this.width,this.height);
    }


}
