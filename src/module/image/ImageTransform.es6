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

    /**
     * 以图片中某点的位置为基准进行缩放
     */
    scaleToByPoint(width,height,x,y){
        let diffWidth =this.imageLayer.imageWidth-width;
        let diffHeight =this.imageLayer.imageHeight-height;
        let _x = diffWidth*x/this.imageLayer.imageWidth;
        let _y = diffHeight*y/this.imageLayer.imageHeight;
        this.imageLayer.imageWidth=width;
        this.imageLayer.imageHeight=height;
        this.imageLayer.imageX=this.imageLayer.imageX+_x;
        this.imageLayer.imageY=this.imageLayer.imageY+_y;
        this.imageLayer.update();

    }

    /**
     * 以图层中的某点的位置为基准进行缩放
     * @param width
     * @param height
     * @param x
     * @param y
     */
    scaleToByLayerPoint(width,height,x,y){
        this.scaleToByPoint(width,height,x-this.imageLayer.imageX,y-this.imageLayer.imageY);
    }

    rotate(){

    }
    commit(){

    }
}