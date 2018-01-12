import Layer from './module/layer/Layer.es6'

export default class Processor{
    container;
    width;
    height;
    layerList=[];//图层顺序列表
    layerMap={};//图层hash
    constructor(dom,args){
        let defaultParams = {
            width:0,
            height:0,
        };
        let _args = Object.assign(defaultParams,args);
        this.container = dom;
        this.width=_args.width;
        this.height=_args.height;
    }

    /**
     * 添加层
     * @param layer
     */
    addLayer(layer){
        if(layer instanceof Layer && !this.layerMap[layer.id]){
            this.layerMap[layer.id]=layer;
            this.layerList.push(layer.id);
            layer.canvas.style.zIndex = this.layerList.length;
            this.container.appendChild(layer.canvas);
        }
    }

    /**
     * 移除层
     * @param id
     */
    removeLayer(id){
        delete this.layerMap[id];
        let deleteIndex = this.layerList.indexOf(id);
        let layer = this.layerList.splice(deleteIndex,1);
        this.container.removeChild(layer.canvas);
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
        // this.ctx.clearRect(0,0,this.width,this.height);
        // this.layerList.forEach((layer)=>{
        //     this.ctx.drawImage(layer.canvas,0,0);
        //     // this.ctx.putImageData(layer.getImageData(),0,0);
        // })
    }
}