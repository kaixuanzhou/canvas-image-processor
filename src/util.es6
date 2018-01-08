/**
 * Created by 80011690 on 2018/1/6.
 */
export default class Util{
    instance=null;
    constructor(){
        if(this.instance){
            return this.instance;
        }else{
            this.instance = this;
            return this;
        }
    }

    /**
     * 加载图片
     * @param path  路径
     * @param succCb  成功回调
     * @param errorCb  失败回调
     */
    loadImage(path,succCb,errorCb){
        let imgobj = new Image();
        imgobj.onload = ()=>{
            succCb&&typeof succCb === 'function'&&succCb(imgobj);
        };
        imgobj.onerror = ()=>{
            errorCb&&typeof errorCb === 'function'&&errorCb(imgobj);
        };
        imgobj.src = path;
    }

    /**
     * 计算图片在容器里铺满的最小尺寸
     * @param yw  图片宽度
     * @param yh  图片高度
     * @param cw  容器宽度
     * @param ch  容器高度
     * @return {width,height,bl}  宽  高  比例
     */
    minSize(yw,yh,cw,ch){
        var bl = 1;
        if(yw>yh){
            bl = cw/yw;
        }else{
            bl = ch/yh;
        }
        return {
            width:yw*bl,
            height:yh*bl,
            bl:bl
        }
    }

    /**
     * 计算矩形在容器中居中时的位置
     * @param w 矩形宽
     * @param h 矩形高
     * @param cw 容器宽
     * @param ch 容器高
     */
    getCenterPosition(w,h,cw,ch){
        return {
            x:(cw-w)/2,
            y:(ch-h)/2
        }
    }

    /**
     * 计算图片缩放到容器大小时的尺寸
     * @param ysw    图片宽度
     * @param ysh    图片高度
     * @param w      容器宽度
     * @param h      容器高度
     * @returns {{width: number, height: number, bl: number}}   {宽，高，缩放比例}
     */
    getContainSize(ysw,ysh,w,h){
        var bl = 1;
        if(ysw>ysh){
            bl = w/ysw;
        }else{
            bl = h/ysh;
        }
        return {
            width:ysw*bl,
            height:ysh*bl,
            bl:bl
        }
    }

    /**
     * 计算图片缩放到容器大小时的尺寸
     * @param ysw    图片宽度
     * @param ysh    图片高度
     * @param w      容器宽度
     * @param h      容器高度
     * @returns {{width: number, height: number, bl: number}}   {宽，高，缩放比例}
     */
    getCoverSize(ysw,ysh,w,h){
        var bl = 1;
        if(ysw<ysh){
            bl = w/ysw;
        }else{
            bl = h/ysh;
        }
        return {
            width:ysw*bl,
            height:ysh*bl,
            bl:bl
        }
    }

    imageToGrey(imageData){
        let c = imageData;
        for(let i = 0; i < c.height; ++i){
            for(let j = 0; j < c.width; ++j){
                let x = i*4*c.width + 4*j,  //imagedata读取的像素数据存储在data属性里，是从上到下，从左到右的，每个像素需要占用4位数据，分别是r,g,b,alpha透明通道
                    r = c.data[x],
                    g = c.data[x+1],
                    b = c.data[x+2];
                c.data[x+3] = 150;    //透明度设置为150,0表示完全透明
                let gray = r*0.299 + g*0.587 + b*0.114;
                c.data[x] =c.data[x+1] =c.data[x+2] = gray;
            }
        }
        return imageData;
    }


}