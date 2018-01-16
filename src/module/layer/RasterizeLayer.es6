import Layer from './Layer.es6';
export default class RasterizeLayer extends Layer{
    sourceImageDataUrl;
    translateX=0;
    translateY=0;
    static parse(layer){
        return new RasterizeLayer(layer.canvas,layer.defaultParams);
    }
    constructor(sourceImageDataUrl,...param){
        super(...param);
        this.sourceImageDataUrl=sourceImageDataUrl;
        this.update();
    }

    translate(x,y){
        this.translateX+=x;
        this.translateY+=y;
        this.ctx.translate(x,y);
    }

    update(){
        this.ctx.save();
        this.ctx.resetTransform();
        this.ctx.clearRect(0,0,this.width,this.height);
        this.ctx.restore();
        this.ctx.drawImage(this.sourceImageDataUrl,0,0);
    }
}
