import Layer from './module/layer/Layer.es6'

export default class Processor{
    canvas;
    ctx;
    width;
    height;
    layerList=[];//图层顺序列表
    layerMap={};//图层hash
    constructor(canvas){
        this.canvas = canvas;
        this.ctx=this.canvas.getContext('2d');
        this.width=this.canvas.width;
        this.height=this.canvas.height;
    }

    /**
     * 添加层
     * @param layer
     */
    addLayer(layer){
        if(layer instanceof Layer && !this.layerMap[layer.id]){
            this.layerMap[layer.id]=layer;
            this.layerList.push(layer.id);
        }
    }

    /**
     * 移除层
     * @param id
     */
    removeLayer(id){
        delete this.layerMap[id];
        let deleteIndex = this.layerList.indexOf(id);
        this.layerList.splice(deleteIndex,1);
    }

    /**
     * 获取所有层
     * @returns {Array}
     */
    getAllLayer(){
        return this.layerList.map((id)=>{
            return this.layerMap[id];
        });
    }

    /**
     * 改变单个层的层叠顺序
     * @param id
     * @param value
     */
    sortLayer(id,value){

    }

    /**
     * 渲染所有层
     */
    render(){
        this.ctx.clearRect(0,0,this.width,this.height);
        this.layerList.forEach((layer)=>{
            this.ctx.drawImage(layer.canvas,0,0);
            // this.ctx.putImageData(layer.getImageData(),0,0);
        })
    }
}