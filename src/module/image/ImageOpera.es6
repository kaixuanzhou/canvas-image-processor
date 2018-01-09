export default class ImageOpera{
    constructor(width,height){
        this.canvas = document.createElement('canvas');
        this.canvas.width=width;
        this.canvas.height=height;
    }
}