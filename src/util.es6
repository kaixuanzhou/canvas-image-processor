/**
 * Created by 80011690 on 2018/1/6.
 */
export class Util{
    constructor(){

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
        }
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





}