import React from 'react';
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

function SparkLine ( { id, height, width, color, data, type, currentColor }  ) {
    return (
      <SparklineComponent
        id={id}
        height={height}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        fill={color}
        border={{ color: currentColor, width: 2 }}
        tooltipSettings={{
          visible: true,
          trackLineSettings: {
            visible: true,
          },
        }}
        dataSource={data}
        xName="x"
        yName="yval"
        type={type}      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    );
  }

export default SparkLine;