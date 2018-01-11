import Layer from './Layer.es6';
export default class ImageLayer extends Layer{
    imageWidth;
    imageHeight;
    imageX;
    imageY;
    constructor(image,...param){
        super(...param);
        this.image = image;
        this.imageWidth=this.image.width;
        this.imageHeight=this.image.height;
        this.imageX=0;
        this.imageY=0;
        this.update();
    }

    update(){
        this.ctx.clearRect(0,0,this.width,this.height);
        this.ctx.drawImage(this.image,this.imageX,this.imageY,this.imageWidth,this.imageHeight);
    }
}