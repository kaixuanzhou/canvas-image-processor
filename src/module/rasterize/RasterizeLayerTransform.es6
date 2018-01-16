/**
 * 栅格化图层变形
 */
export default class RasterizeLayerTransform{
    rasterizeLayer;
    scaleWidth=1;
    scaleHeight=1

    constructor(rasterizeLayer){
        this.rasterizeLayer=rasterizeLayer;
    }

    move(x,y){
        this.rasterizeLayer.translate(x/this.scaleWidth,y/this.scaleHeight);
        this.rasterizeLayer.update();
    }

    scale(scaleWidth,scaleHeight){
        this.rasterizeLayer.ctx.save();
        this.rasterizeLayer.ctx.scale(scaleWidth,scaleHeight);
        this.rasterizeLayer.update();
        this.rasterizeLayer.ctx.restore();
    }

    scaleTo(width,height){
        console.log('to do');
    }

    /**
     * 以图片中某点的位置为基准进行缩放
     */
    scaleByPoint(scaleWidth,scaleHeight,x,y){
        this.scaleWidth*=scaleWidth;
        this.scaleHeight*=scaleHeight;
        this.rasterizeLayer.ctx.translate(x*(1-scaleWidth),y*(1-scaleHeight));
        this.rasterizeLayer.ctx.scale(scaleWidth,scaleHeight);
        this.rasterizeLayer.update();
    }
    previewMode(fn,...args){
        this.rasterizeLayer.ctx.save();
        if(fn){
            fn = fn.bind(this);
            fn.call(this,args);
        }
        this.rasterizeLayer.ctx.restore();
    }

    /**
     * 以图层中的某点的位置为基准进行缩放
     * @param width
     * @param height
     * @param x 
     * @param y
     */
    scaleToByLayerPoint(width,height,x,y){
        console.log('to do');}
    rotate(){
        console.log('to do');}
    commit(){}
}