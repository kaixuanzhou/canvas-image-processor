
export default class SelectedAreaService{
    constructor(){

    }
    static clip(layer,selectedArea){
        layer.ctx.globalCompositeOperation = 'destination-out';
        // layer.ctx.fillRect(150,20,75,50);
        // let imgobj = new Image();
        // imgobj.src = selectedArea.canvas.toDataURL('png',1);
        // imgobj.onload=function(){
        //     layer.ctx.drawImage(imgobj,0,0);
        // }
        layer.ctx.drawImage(selectedArea.canvas,0,0);
    }
}