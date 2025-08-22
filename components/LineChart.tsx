import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Path, Circle, Line, Text as SvgText } from 'react-native-svg';

interface DataPoint {
  x: number;
  y: number;
  label?: string;
  isAnomaly?: boolean;
  isPrediction?: boolean;
}

interface LineChartProps {
  data: DataPoint[];
  width: number;
  height: number;
  showPrediction?: boolean;
  showAnomalies?: boolean;
}

export const LineChart: React.FC<LineChartProps> = ({ 
  data, 
  width, 
  height, 
  showPrediction = false,
  showAnomalies = false
}) => {
  const padding = 40;
  const chartWidth = width - padding * 2;
  const chartHeight = height - padding * 2;

  // Find min/max values for scaling
  const minY = Math.min(...data.map(d => d.y)) * 0.9;
  const maxY = Math.max(...data.map(d => d.y)) * 1.1;
  const minX = Math.min(...data.map(d => d.x));
  const maxX = Math.max(...data.map(d => d.x));

  // Scale functions
  const scaleX = (x: number) => ((x - minX) / (maxX - minX)) * chartWidth + padding;
  const scaleY = (y: number) => chartHeight - ((y - minY) / (maxY - minY)) * chartHeight + padding;

  // Create path for the line
  const createPath = (points: DataPoint[], isPredicted = false) => {
    if (points.length === 0) return '';
    
    let path = `M ${scaleX(points[0].x)} ${scaleY(points[0].y)}`;
    
    for (let i = 1; i < points.length; i++) {
      const currentPoint = points[i];
      path += ` L ${scaleX(currentPoint.x)} ${scaleY(currentPoint.y)}`;
    }
    
    return path;
  };

  // Split data for prediction line
  const actualData = data.filter(d => !d.isPrediction);
  const predictionData = showPrediction ? data.filter(d => d.isPrediction) : [];
  
  // Connect actual to prediction
  if (showPrediction && actualData.length > 0 && predictionData.length > 0) {
    predictionData.unshift(actualData[actualData.length - 1]);
  }

  const actualPath = createPath(actualData);
  const predictionPath = showPrediction ? createPath(predictionData) : '';

  return (
    <View style={styles.container}>
      <Svg width={width} height={height}>
        {/* Grid lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => {
          const y = padding + ratio * chartHeight;
          const value = maxY - ratio * (maxY - minY);
          return (
            <React.Fragment key={index}>
              <Line
                x1={padding}
                y1={y}
                x2={width - padding}
                y2={y}
                stroke="#f3f4f6"
                strokeWidth={1}
              />
              <SvgText
                x={padding - 8}
                y={y + 4}
                fontSize={10}
                fill="#9ca3af"
                textAnchor="end"
              >
                {Math.round(value)}
              </SvgText>
            </React.Fragment>
          );
        })}

        {/* Actual data line */}
        <Path
          d={actualPath}
          stroke="#22c55e"
          strokeWidth={3}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Prediction line */}
        {showPrediction && predictionPath && (
          <Path
            d={predictionPath}
            stroke="#3b82f6"
            strokeWidth={3}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="5,5"
          />
        )}

        {/* Data points */}
        {data.map((point, index) => {
          const cx = scaleX(point.x);
          const cy = scaleY(point.y);
          
          let color = '#22c55e';
          let radius = 4;
          
          if (point.isPrediction) {
            color = '#3b82f6';
            radius = 3;
          }
          
          if (showAnomalies && point.isAnomaly) {
            color = '#ef4444';
            radius = 6;
          }

          return (
            <Circle
              key={index}
              cx={cx}
              cy={cy}
              r={radius}
              fill={color}
              stroke="white"
              strokeWidth={2}
            />
          );
        })}
      </Svg>

      {/* Legend */}
      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#22c55e' }]} />
          <Text style={styles.legendText}>Actual</Text>
        </View>
        {showPrediction && (
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: '#3b82f6' }]} />
            <Text style={styles.legendText}>Predicted</Text>
          </View>
        )}
        {showAnomalies && (
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: '#ef4444' }]} />
            <Text style={styles.legendText}>Anomaly</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  legend: {
    flexDirection: 'row',
    marginTop: 16,
    gap: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendText: {
    fontSize: 12,
    color: '#6b7280',
  },
});