import SelectedArea from "./SelectedArea.es6";

export default class SelectedAreaMap{
    selectedAreaList=[];
    constructor(list){
        if(list){
            this.selectedAreaList = list;
        }
    }

    addSelectedArea(selectedArea){
        this.selectedAreaList.push(selectedArea);
    }

    /**
     * 优化集合
     */
    optimization(){

    }
}