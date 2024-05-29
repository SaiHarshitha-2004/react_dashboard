import React from 'react';
import { ChartComponent , SeriesCollectionDirective ,SeriesDirective ,Inject , Legend , Category , StackingColumnSeries , Tooltip , DataLabel } from '@syncfusion/ej2-react-charts';
 import {stackedCustomSeries , stackedPrimaryXAxis , stackedPrimaryYAxis} from '../../data/dummy';

const Stacked = ( {width ,height}) => {
  return (
    <ChartComponent width={width} 
     height={height} 
     tooltip={ {enable:true} } 
     chartArea={{border:{width: 0}}}
     id="charts"
     legendSettings={ {background:'white'}}
      primaryXAxis={stackedPrimaryXAxis}
       primaryYAxis={stackedPrimaryYAxis}
    >
      <Inject services={ [StackingColumnSeries , Legend , Tooltip , DataLabel , Category ]}/> 
      <SeriesCollectionDirective>
        {stackedCustomSeries.map( (item,index) => 
          <SeriesDirective key={index} {...item} />
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked
