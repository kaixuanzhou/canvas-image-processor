/**
 * 图形变形
 */
export default class ImageTransform{
    imageLayer;
    constructor(imageLayer){
        this.imageLayer=imageLayer;
    }

    move(x,y){
        this.imageLayer.imageX=this.imageLayer.imageX+x;
        this.imageLayer.imageY=this.imageLayer.imageY+y;
        this.imageLayer.update();
    }

    scaleTo(width,height){
        this.imageLayer.imageWidth=width;
        this.imageLayer.imageHeight=height;
        this.imageLayer.update();
    }


    rotate(){

    }
    commit(){

    }
}