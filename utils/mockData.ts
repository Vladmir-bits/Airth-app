// Mock energy data for different time periods
export const mockEnergyData = {
  day: [
    { x: 0, y: 5.2 }, { x: 1, y: 4.8 }, { x: 2, y: 4.5 }, { x: 3, y: 4.3 },
    { x: 4, y: 4.1 }, { x: 5, y: 4.0 }, { x: 6, y: 6.2 }, { x: 7, y: 12.5 },
    { x: 8, y: 18.3 }, { x: 9, y: 22.1 }, { x: 10, y: 24.5 }, { x: 11, y: 26.2 },
    { x: 12, y: 28.1 }, { x: 13, y: 29.5 }, { x: 14, y: 31.2 }, { x: 15, y: 28.8 },
    { x: 16, y: 26.5 }, { x: 17, y: 24.2 }, { x: 18, y: 18.7 }, { x: 19, y: 15.3 },
    { x: 20, y: 12.8 }, { x: 21, y: 10.5 }, { x: 22, y: 8.2 }, { x: 23, y: 6.5 },
  ],
  week: [
    { x: 1, y: 145.2 }, { x: 2, y: 152.8 }, { x: 3, y: 148.3 }, { x: 4, y: 156.7 },
    { x: 5, y: 162.1 }, { x: 6, y: 98.5 }, { x: 7, y: 87.3 },
  ],
  month: [
    { x: 1, y: 1200 }, { x: 2, y: 1150 }, { x: 3, y: 1280 }, { x: 4, y: 1320 },
    { x: 5, y: 1180 }, { x: 6, y: 1250 }, { x: 7, y: 1190 }, { x: 8, y: 1310 },
    { x: 9, y: 1270 }, { x: 10, y: 1220 }, { x: 11, y: 1160 }, { x: 12, y: 1290 },
    { x: 13, y: 1240 }, { x: 14, y: 1180 }, { x: 15, y: 1350 }, { x: 16, y: 1200 },
    { x: 17, y: 1170 }, { x: 18, y: 1260 }, { x: 19, y: 1230 }, { x: 20, y: 1190 },
    { x: 21, y: 1280 }, { x: 22, y: 1210 }, { x: 23, y: 1140 }, { x: 24, y: 1300 },
    { x: 25, y: 1250 }, { x: 26, y: 1180 }, { x: 27, y: 1220 }, { x: 28, y: 1160 },
    { x: 29, y: 1270 }, { x: 30, y: 1240 },
  ],
};

// Mock prediction data for analytics
export const mockPredictionData = [
  // Actual data (last 3 days)
  { x: 1, y: 145.2 }, { x: 2, y: 152.8 }, { x: 3, y: 148.3 },
  // Predicted data (next 4 days)
  { x: 4, y: 138.5, isPrediction: true },
  { x: 5, y: 142.1, isPrediction: true },
  { x: 6, y: 95.8, isPrediction: true }, // Weekend
  { x: 7, y: 88.3, isPrediction: true }, // Weekend
];

// Mock anomaly data
export const mockAnomalyData = [
  { x: 1, y: 145.2 }, { x: 2, y: 152.8 }, { x: 3, y: 185.3, isAnomaly: true },
  { x: 4, y: 156.7 }, { x: 5, y: 162.1 }, { x: 6, y: 98.5 }, { x: 7, y: 125.3, isAnomaly: true },
];

// Mock trend data (30 days)
export const mockTrendData = [
  { x: 1, y: 1200 }, { x: 2, y: 1150 }, { x: 3, y: 1280 }, { x: 4, y: 1320 },
  { x: 5, y: 1180 }, { x: 6, y: 1250 }, { x: 7, y: 1190 }, { x: 8, y: 1310 },
  { x: 9, y: 1270 }, { x: 10, y: 1220 }, { x: 11, y: 1160 }, { x: 12, y: 1290 },
  { x: 13, y: 1240 }, { x: 14, y: 1180 }, { x: 15, y: 1350 }, { x: 16, y: 1200 },
  { x: 17, y: 1170 }, { x: 18, y: 1260 }, { x: 19, y: 1230 }, { x: 20, y: 1190 },
  { x: 21, y: 1280 }, { x: 22, y: 1210 }, { x: 23, y: 1140 }, { x: 24, y: 1300 },
  { x: 25, y: 1250 }, { x: 26, y: 1180 }, { x: 27, y: 1220 }, { x: 28, y: 1160 },
  { x: 29, y: 1270 }, { x: 30, y: 1240 },
];

// SME Mock Data Generator
export const generateSMEMockData = () => ({
  lighting: {
    current: 8.5, // kWh
    daily: [2.1, 2.3, 2.0, 2.4, 2.2, 1.8, 1.6],
    peak: '2:00 PM',
  },
  hvac: {
    current: 12.3, // kWh
    daily: [3.2, 3.5, 3.1, 3.8, 3.4, 2.1, 1.9],
    efficiency: '92%',
  },
  equipment: {
    current: 6.7, // kWh
    daily: [1.8, 1.9, 1.7, 2.0, 1.8, 1.2, 1.1],
    devices: 24,
  },
  servers: {
    current: 4.2, // kWh
    daily: [4.1, 4.3, 4.0, 4.2, 4.1, 4.0, 3.9],
    uptime: '99.8%',
  },
});

// Household Mock Data Generator
export const generateHouseholdMockData = () => ({
  appliances: {
    current: 5.2, // kWh
    daily: [5.1, 5.4, 4.8, 5.6, 5.2, 4.2, 3.8],
    top: 'Refrigerator',
  },
  heating: {
    current: 8.1, // kWh
    daily: [8.2, 7.8, 8.5, 8.0, 7.9, 6.5, 6.2],
    setpoint: '21°C',
  },
  lighting: {
    current: 2.3, // kWh
    daily: [2.1, 2.4, 2.2, 2.5, 2.3, 2.0, 1.8],
    led_percentage: '85%',
  },
  electronics: {
    current: 3.8, // kWh
    daily: [3.5, 4.1, 3.7, 4.0, 3.8, 4.2, 3.9],
    standby: '12%',
  },
});