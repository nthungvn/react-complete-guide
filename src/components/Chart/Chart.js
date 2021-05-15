import './Chart.css';
import ChartBar from './ChartBar';

const Chart = (props) => {
  const maxValueChart = Math.max(
    ...props.dataPoints.map((dataPoint) => dataPoint.value)
  );
  return (
    <div className="chart">
      {props.dataPoints.map((chartPoint) => (
        <ChartBar
          key={chartPoint.label}
          value={chartPoint.value}
          maxValue={maxValueChart}
          label={chartPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
