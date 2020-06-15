import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface Props {
  data: number[];
}

const BarChart: React.FC<Props> = ({ data }: Props) => {
  const chartContainer = useRef(null);
  const canvasHeight = 400;
  const canvasWidth = 800;
  const scale = 20;
  const barWidth = scale * 2;
  const barSpacing = canvasWidth / data.length;

  useEffect(() => {
    if (data && chartContainer.current) {
      drawBarChart();
    }
  });

  const drawBarChart = () => {
    const svgCanvas = d3
      .select(chartContainer.current)
      .append('svg')
      .attr('width', canvasWidth)
      .attr('height', canvasHeight)
      .style('border', '1px solid black');

    svgCanvas
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('width', barWidth)
      .attr('height', (datapoint) => datapoint * scale)
      .attr('fill', 'orange')
      .attr('x', (datapoint, i) => i * barSpacing)
      .attr('y', (datapoint) => canvasHeight - datapoint * scale);
  };

  return <div ref={chartContainer}></div>;
};

export default BarChart;
