export default class ImageObject{
    image;
    position={x:0,y:0};
    _tempPosition={x:0,y:0};//临时位置，用于处理缩放等功能时的基准位置，修改中心点时同步和position一致
    size={width:0,height:0};
    ratio={width:1,height:1};
    origin={x:0,y:0};
    constructor(image){
        if(!image instanceof Image) return null;
        this.image = image;
        this.size.width=image.width;
        this.size.height=image.height;
    }
    scaleBySize(width,height){
        this.size.width=width;
        this.size.height=height;
        this.ratio={
            widthRatio:width/this.image.width,heightRatio:height/this.image.height
        };
        let _x = (this.origin.x-this._tempPosition.x)*this.ratio.widthRatio;
        let _y = (this.origin.y-this._tempPosition.y)*this.ratio.heightRatio;
        this.position.x=this.position.x-_x;
        this.position.y=this.position.y-_y;
    }
    scale(widthRatio,heightRatio){
        this.size.width=this.image.width*widthRatio;
        this.size.height=this.image.height*heightRatio;
        this.ratio={
            widthRatio,heightRatio
        };
        let _x = (this.origin.x-this._tempPosition.x)*this.ratio.widthRatio;
        let _y = (this.origin.y-this._tempPosition.y)*this.ratio.heightRatio;
        this.position.x=this.position.x-_x;
        this.position.y=this.position.y-_y;
    }
    setOrigin(x,y){
        this._tempPosition = this.position;
        this.origin={x,y}
    }
    setPosition(x,y){
        this.position={x,y}
    }
}