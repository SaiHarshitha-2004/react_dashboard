
import * as React from "react";
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';
import { PyramidData } from '../../data/dummy.js';
import { useStateContext } from "../../context/ContextProvider.js";

const Pyramid = () => {
  const {currentMode} = useStateContext();
    return <AccumulationChartComponent id='charts' background={currentMode === 'Dark' ? '#333.73E' :'#fff'}
    className="dark:text-gray-400">
      <Inject services={[AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel]}/>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={PyramidData} xName='x' yName='y' type='Pyramid'>
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>;
}


export default Pyramid;
