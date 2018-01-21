const style = [

]
export default class SelectedArea{
    instance;
    canvas;
    ctx;
    pattern=SelectedArea.PATTERN_ADD;
    constructor(pointArr){
        if(this.instance){
            return this.instance;
        }else{
            this.canvas = document.createElement('canvas');
            this.canvas.width=600;
            this.canvas.height=600;
            document.getElementsByTagName('body')[0].appendChild(this.canvas);
            this.ctx = this.canvas.getContext('2d');
            this.checkPattern(this.pattern);
            this.instance = this;
        }
    }

    addByPoints(arr){
        arr.forEach((point,index) => {
            if(index===1){
                this.ctx.beginPath();
                this.ctx.moveTo(point.x,point.y);
            }else{
                this.ctx.lineTo(point.x,point.y);
            }
        });
        this.ctx.closePath();
        this.ctx.fill();
    }
    addByRect(x,y,w,h){
        this.ctx.fillRect(x,y,w,h)
    }
    addByArc(x,y,r){
        ctx.arc(x,y,r);
        this.ctx.fill();
    }

    checkPattern(type){
        switch(type){
            case SelectedArea.PATTERN_ADD:
            this.ctx.fillStyle='rgba(0,0,0,1)';
                break;
            case SelectedArea.PATTERN_REMOVE:
            this.ctx.fillStyle='rgba(255,255,255,0)';
                break;
            default:

        }
    }
}

SelectedArea.PATTERN_ADD = 1;//添加选区
SelectedArea.PATTERN_REMOVE = 2;//删除选区
SelectedArea.PATTERN_AND = 3;//并集选区
SelectedArea.PATTERN_RE = 4;//重制选区