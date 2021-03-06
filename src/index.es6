/**
 * Created by 80011690 on 2018/1/5.
 */
import Service from './service/index.es6';

import Processor from './processorCore.es6';
import {Layer,ImageLayer,RasterizeLayer} from './module/layer/index.es6';
import ImageTransform from './module/image/ImageTransform.es6';
import RasterizeLayerTransform from './module/rasterize/RasterizeLayerTransform.es6';
import SelectedArea from './module/selectedArea/SelectedArea.es6';
import SelectedAreaService from './module/selectedArea/SelectedAreaService.es6';

/**
 * 核心代码
 *
 */
export {
    Service,Processor,Layer,ImageLayer,RasterizeLayer,ImageTransform,RasterizeLayerTransform,
    SelectedArea,SelectedAreaService
}