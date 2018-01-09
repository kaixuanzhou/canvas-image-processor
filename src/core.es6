/**
 * Created by 80011690 on 2018/1/5.
 */
import UtilClass from './util.es6';
import ImageObject from './module/image/ImageObject.es6';
import BaseService from './service/BaseService.es6';


const Util = new UtilClass();
/**
 * 核心代码
 *
 */
export default class Core {
    canvas=null;
    ctx=null;//canvas context
    contentArea={};//内容区域、包括超出画布范围的内容
    serviceMap={};//服务map集合
    zoom=1;//缩放比例
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
        this.contentArea = {
            x:0,
            y:0,
            width:this.canvas.width,
            height:this.canvas.height
        }
    }

    /**
     * 绘制图片对象
     * @param imageObject
     */
    addImage(imageObject){
        this.ctx.drawImage(imageObject.image,0,0,imageObject.image.width,imageObject.image.height,imageObject.position.x,imageObject.position.y,imageObject.size.width,imageObject.size.height);
    }

    /**
     * 根据图片地址绘制图片
     * @param path  路径
     * @param ctxParamArr   ctx.drawImaged的其他参数
     */
    drawImage(path,ctxParamArr,cb){
        Util.loadImage(path,(imgobj)=>{
            this.ctx.drawImage(imgobj,...ctxParamArr)
        cb&&typeof cb === 'function'&&cb();
    })
    }

    /**
     * 缩放图片到合适大小
     * @param path 路径
     * @param type 处理方式 Contain 尽量在容器内最大化  cover 完全覆盖容器的最小尺寸
     */
    drawImageByShrink(path,type,cb){
        Util.loadImage(path,(imgobj)=>{
            let shrinkSize = {x:0,y:0};
        if(type === 'contain'){
            shrinkSize = Util.getContainSize(imgobj.width,imgobj.height,this.canvas.width,this.canvas.height);
        }else{
            shrinkSize = Util.getCoverSize(imgobj.width,imgobj.height,this.canvas.width,this.canvas.height);
        }
        let shrinkPosition = Util.getCenterPosition(shrinkSize.width,shrinkSize.height,this.canvas.width,this.canvas.height);
        this.ctx.drawImage(imgobj,0,0,imgobj.width,imgobj.height,shrinkPosition.x,shrinkPosition.y,shrinkSize.width,shrinkSize.height);
        cb&&typeof cb === 'function'&&cb();
    })
    }

    /**
     * 去色
     * @param range 处理范围  {x,y,width,height}   为空时默认画布可视区域
     */
    desaturate(range){
        let _range = this.contentArea;
        if(range&&range.x&&range.y&&range.width&&range.height){
            _range = range;
        }
        let imageData = this.ctx.getImageData(_range.x, _range.y, _range.width,_range.height);
        this.ctx.clearRect(_range.x, _range.y, _range.width,_range.height);
        let greyData = Util.imageToGrey(imageData);
        this.ctx.putImageData(greyData,_range.x,_range.y);
    }

    /**
     * 缩放画布内容
     * @param centerPoint  缩放中心点，默认画布中心
     * @param size      缩放尺寸
     */
    zoom(centerPoint,size){
        let imageData = this.ctx.getImageData(0,0,100,100);

        let startFn = ()=>{

        }
    }

    /**
     * 添加一个服务
     * @param serviceClass 服务类
     */
    addService(serviceClass){
        if(serviceClass.prototype.__proto__.constructor=== BaseService){
            if(this.serviceMap[serviceClass.name]) return;
            let serive = new serviceClass(this);
            serive.init();
            this.serviceMap[serviceClass.name]=serive;
        }
    }

    /**
     * 添加一个服务
     * @param serviceClass 服务类
     */
    removeService(serviceClass){
        if(serviceClass.prototype.__proto__.constructor=== BaseService){
            if(!this.serviceMap[serviceClass.name]) return;
            this.serviceMap[serviceClass.name].destroy();
            delete this.serviceMap[serviceClass.name];
        }
    }

}
