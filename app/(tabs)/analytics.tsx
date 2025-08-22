import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { TrendingUp, TriangleAlert as AlertTriangle, Target, Calendar, Zap, Clock } from 'lucide-react-native';
import { LineChart } from '@/components/LineChart';
import { mockPredictionData, mockAnomalyData, mockTrendData } from '@/utils/mockData';

const { width } = Dimensions.get('window');

export default function Analytics() {
  const [selectedAnalysis, setSelectedAnalysis] = useState('predictions');

  const analysisTypes = [
    { key: 'predictions', label: 'Predictions', icon: TrendingUp },
    { key: 'anomalies', label: 'Anomalies', icon: AlertTriangle },
    { key: 'trends', label: 'Trends', icon: Target },
  ];

  const renderPredictions = () => (
    <View style={styles.analysisSection}>
      <Text style={styles.analysisTitle}>7-Day Energy Forecast</Text>
      <LineChart 
        data={mockPredictionData} 
        width={width - 48} 
        height={200} 
        showPrediction={true}
      />
      
      <View style={styles.predictionInsights}>
        <View style={styles.predictionCard}>
          <View style={styles.predictionIcon}>
            <Zap size={24} color="#3b82f6" />
          </View>
          <View style={styles.predictionContent}>
            <Text style={styles.predictionTitle}>Peak Expected</Text>
            <Text style={styles.predictionValue}>Tomorrow 2:00 PM</Text>
            <Text style={styles.predictionDescription}>28.5 kWh projected</Text>
          </View>
        </View>

        <View style={styles.predictionCard}>
          <View style={[styles.predictionIcon, { backgroundColor: '#dcfce7' }]}>
            <TrendingUp size={24} color="#22c55e" />
          </View>
          <View style={styles.predictionContent}>
            <Text style={styles.predictionTitle}>Weekly Outlook</Text>
            <Text style={styles.predictionValue}>12% Reduction</Text>
            <Text style={styles.predictionDescription}>Compared to last week</Text>
          </View>
        </View>

        <View style={styles.predictionCard}>
          <View style={[styles.predictionIcon, { backgroundColor: '#fef3c7' }]}>
            <Target size={24} color="#f59e0b" />
          </View>
          <View style={styles.predictionContent}>
            <Text style={styles.predictionTitle}>Goal Progress</Text>
            <Text style={styles.predictionValue}>73% Complete</Text>
            <Text style={styles.predictionDescription}>Monthly target on track</Text>
          </View>
        </View>
      </View>
    </View>
  );

  const renderAnomalies = () => (
    <View style={styles.analysisSection}>
      <Text style={styles.analysisTitle}>Anomaly Detection</Text>
      <LineChart 
        data={mockAnomalyData} 
        width={width - 48} 
        height={200}
        showAnomalies={true}
      />
      
      <View style={styles.anomalyList}>
        <View style={styles.anomalyCard}>
          <View style={styles.anomalyIndicator}>
            <AlertTriangle size={20} color="#ef4444" />
          </View>
          <View style={styles.anomalyContent}>
            <Text style={styles.anomalyTitle}>Unusual Spike Detected</Text>
            <Text style={styles.anomalyTime}>Yesterday 3:42 PM</Text>
            <Text style={styles.anomalyDescription}>
              Office lighting consumption was 45% higher than normal during this period.
            </Text>
          </View>
          <View style={styles.anomalySeverity}>
            <Text style={styles.severityText}>HIGH</Text>
          </View>
        </View>

        <View style={styles.anomalyCard}>
          <View style={[styles.anomalyIndicator, { backgroundColor: '#fef3c7' }]}>
            <AlertTriangle size={20} color="#f59e0b" />
          </View>
          <View style={styles.anomalyContent}>
            <Text style={styles.anomalyTitle}>HVAC Pattern Change</Text>
            <Text style={styles.anomalyTime}>2 days ago</Text>
            <Text style={styles.anomalyDescription}>
              Heating system ran 2 hours longer than usual for this temperature.
            </Text>
          </View>
          <View style={[styles.anomalySeverity, { backgroundColor: '#fef3c7' }]}>
            <Text style={[styles.severityText, { color: '#f59e0b' }]}>MEDIUM</Text>
          </View>
        </View>

        <View style={styles.anomalyCard}>
          <View style={[styles.anomalyIndicator, { backgroundColor: '#ddd6fe' }]}>
            <AlertTriangle size={20} color="#8b5cf6" />
          </View>
          <View style={styles.anomalyContent}>
            <Text style={styles.anomalyTitle}>Weekend Usage</Text>
            <Text style={styles.anomalyTime}>Last Saturday</Text>
            <Text style={styles.anomalyDescription}>
              Equipment left running during weekend. Consider automated scheduling.
            </Text>
          </View>
          <View style={[styles.anomalySeverity, { backgroundColor: '#ddd6fe' }]}>
            <Text style={[styles.severityText, { color: '#8b5cf6' }]}>LOW</Text>
          </View>
        </View>
      </View>
    </View>
  );

  const renderTrends = () => (
    <View style={styles.analysisSection}>
      <Text style={styles.analysisTitle}>30-Day Trend Analysis</Text>
      <LineChart 
        data={mockTrendData} 
        width={width - 48} 
        height={200}
      />
      
      <View style={styles.trendInsights}>
        <LinearGradient
          colors={['#22c55e', '#16a34a']}
          style={styles.trendCard}
        >
          <Text style={styles.trendCardTitle}>Peak Hours Analysis</Text>
          <Text style={styles.trendCardValue}>2:00 PM - 4:00 PM</Text>
          <Text style={styles.trendCardDescription}>
            Consistent peak usage during afternoon hours. Consider load shifting.
          </Text>
        </LinearGradient>

        <View style={styles.trendMetrics}>
          <View style={styles.trendMetric}>
            <Clock size={20} color="#6b7280" />
            <Text style={styles.trendMetricLabel}>Avg Daily</Text>
            <Text style={styles.trendMetricValue}>24.2 kWh</Text>
          </View>

          <View style={styles.trendMetric}>
            <TrendingUp size={20} color="#6b7280" />
            <Text style={styles.trendMetricLabel}>Monthly Change</Text>
            <Text style={[styles.trendMetricValue, { color: '#22c55e' }]}>-8.5%</Text>
          </View>

          <View style={styles.trendMetric}>
            <Target size={20} color="#6b7280" />
            <Text style={styles.trendMetricLabel}>Efficiency</Text>
            <Text style={styles.trendMetricValue}>94.2%</Text>
          </View>
        </View>
      </View>
    </View>
  );

  const renderAnalysisContent = () => {
    switch (selectedAnalysis) {
      case 'predictions':
        return renderPredictions();
      case 'anomalies':
        return renderAnomalies();
      case 'trends':
        return renderTrends();
      default:
        return renderPredictions();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Analytics & Insights</Text>
          <Text style={styles.subtitle}>Advanced energy consumption analysis</Text>
        </View>

        {/* Analysis Type Selector */}
        <View style={styles.selectorContainer}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.selectorContent}
          >
            {analysisTypes.map((type) => {
              const IconComponent = type.icon;
              return (
                <TouchableOpacity
                  key={type.key}
                  style={[
                    styles.selectorButton,
                    selectedAnalysis === type.key && styles.selectorButtonActive,
                  ]}
                  onPress={() => setSelectedAnalysis(type.key)}
                  activeOpacity={0.7}
                >
                  <IconComponent 
                    size={20} 
                    color={selectedAnalysis === type.key ? 'white' : '#6b7280'} 
                  />
                  <Text
                    style={[
                      styles.selectorButtonText,
                      selectedAnalysis === type.key && styles.selectorButtonTextActive,
                    ]}
                  >
                    {type.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>

        {/* Analysis Content */}
        <View style={styles.contentContainer}>
          {renderAnalysisContent()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
  },
  selectorContainer: {
    paddingBottom: 24,
  },
  selectorContent: {
    paddingHorizontal: 24,
    gap: 12,
  },
  selectorButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    gap: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  selectorButtonActive: {
    backgroundColor: '#22c55e',
    borderColor: '#22c55e',
  },
  selectorButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
  },
  selectorButtonTextActive: {
    color: 'white',
  },
  contentContainer: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  analysisSection: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
  },
  analysisTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 20,
  },
  predictionInsights: {
    marginTop: 20,
    gap: 12,
  },
  predictionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 16,
  },
  predictionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#dbeafe',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  predictionContent: {
    flex: 1,
  },
  predictionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
    marginBottom: 4,
  },
  predictionValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 2,
  },
  predictionDescription: {
    fontSize: 12,
    color: '#9ca3af',
  },
  anomalyList: {
    marginTop: 20,
    gap: 12,
  },
  anomalyCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#f9fafb',
    borderRadius: 12,
    padding: 16,
  },
  anomalyIndicator: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fee2e2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  anomalyContent: {
    flex: 1,
  },
  anomalyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  anomalyTime: {
    fontSize: 12,
    color: '#6b7280',
    marginBottom: 8,
  },
  anomalyDescription: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
  },
  anomalySeverity: {
    backgroundColor: '#fee2e2',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  severityText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#ef4444',
  },
  trendInsights: {
    marginTop: 20,
  },
  trendCard: {
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
  },
  trendCardTitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 8,
  },
  trendCardValue: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
    marginBottom: 8,
  },
  trendCardDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: 20,
  },
  trendMetrics: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  trendMetric: {
    alignItems: 'center',
    flex: 1,
  },
  trendMetricLabel: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 8,
    marginBottom: 4,
  },
  trendMetricValue: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
});