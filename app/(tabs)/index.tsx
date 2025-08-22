import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { ChartBar as BarChart3, TrendingDown, Zap, Leaf, ChevronRight, Calendar } from 'lucide-react-native';
import { LineChart } from '@/components/LineChart';
import { mockEnergyData } from '@/utils/mockData';

const { width } = Dimensions.get('window');

export default function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  const [energyData, setEnergyData] = useState(mockEnergyData.week);

  useEffect(() => {
    setEnergyData(mockEnergyData[selectedPeriod]);
  }, [selectedPeriod]);

  const currentConsumption = 24.5; // kWh
  const carbonSaved = 8.2; // kg CO₂
  const costSaving = 15.3; // percentage
  const efficiency = 92; // percentage

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Good morning! 👋</Text>
            <Text style={styles.companyName}>GreenTech Solutions</Text>
          </View>
          <TouchableOpacity style={styles.dateButton}>
            <Calendar size={20} color="#22c55e" />
            <Text style={styles.dateText}>Today</Text>
          </TouchableOpacity>
        </View>

        {/* Summary Cards */}
        <View style={styles.summaryContainer}>
          <LinearGradient
            colors={['#22c55e', '#16a34a']}
            style={styles.mainCard}
          >
            <Text style={styles.mainCardTitle}>Energy Saved This Week</Text>
            <Text style={styles.mainCardValue}>15.2%</Text>
            <Text style={styles.mainCardSubtext}>
              Your company reduced energy use by 15.2%, saving {carbonSaved} kg of CO₂
            </Text>
          </LinearGradient>

          <View style={styles.metricsGrid}>
            <View style={styles.metricCard}>
              <View style={styles.metricIcon}>
                <Zap size={24} color="#3b82f6" />
              </View>
              <Text style={styles.metricValue}>{currentConsumption}</Text>
              <Text style={styles.metricLabel}>kWh Today</Text>
              <Text style={styles.metricChange}>-12.5%</Text>
            </View>

            <View style={styles.metricCard}>
              <View style={styles.metricIcon}>
                <Leaf size={24} color="#22c55e" />
              </View>
              <Text style={styles.metricValue}>{carbonSaved}</Text>
              <Text style={styles.metricLabel}>kg CO₂ Saved</Text>
              <Text style={styles.metricChange}>+8.3%</Text>
            </View>

            <View style={styles.metricCard}>
              <View style={styles.metricIcon}>
                <TrendingDown size={24} color="#f59e0b" />
              </View>
              <Text style={styles.metricValue}>{costSaving}%</Text>
              <Text style={styles.metricLabel}>Cost Reduction</Text>
              <Text style={styles.metricChange}>+3.2%</Text>
            </View>

            <View style={styles.metricCard}>
              <View style={styles.metricIcon}>
                <BarChart3 size={24} color="#8b5cf6" />
              </View>
              <Text style={styles.metricValue}>{efficiency}%</Text>
              <Text style={styles.metricLabel}>Efficiency</Text>
              <Text style={styles.metricChange}>+5.1%</Text>
            </View>
          </View>
        </View>

        {/* Energy Consumption Chart */}
        <View style={styles.chartContainer}>
          <View style={styles.chartHeader}>
            <Text style={styles.chartTitle}>Energy Consumption</Text>
            <View style={styles.periodSelector}>
              {['day', 'week', 'month'].map((period) => (
                <TouchableOpacity
                  key={period}
                  style={[
                    styles.periodButton,
                    selectedPeriod === period && styles.periodButtonActive,
                  ]}
                  onPress={() => setSelectedPeriod(period)}
                >
                  <Text
                    style={[
                      styles.periodButtonText,
                      selectedPeriod === period && styles.periodButtonTextActive,
                    ]}
                  >
                    {period.charAt(0).toUpperCase() + period.slice(1)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          
          <LineChart data={energyData} width={width - 48} height={200} />
        </View>

        {/* Quick Insights */}
        <View style={styles.insightsContainer}>
          <Text style={styles.sectionTitle}>Quick Insights</Text>
          
          <TouchableOpacity style={styles.insightCard} activeOpacity={0.7}>
            <View style={styles.insightIcon}>
              <Zap size={20} color="#22c55e" />
            </View>
            <View style={styles.insightContent}>
              <Text style={styles.insightTitle}>Peak Usage Detected</Text>
              <Text style={styles.insightDescription}>
                Office lighting peaked at 2 PM today. Consider automated dimming.
              </Text>
            </View>
            <ChevronRight size={20} color="#9ca3af" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.insightCard} activeOpacity={0.7}>
            <View style={[styles.insightIcon, { backgroundColor: '#fef3c7' }]}>
              <TrendingDown size={20} color="#f59e0b" />
            </View>
            <View style={styles.insightContent}>
              <Text style={styles.insightTitle}>HVAC Optimization</Text>
              <Text style={styles.insightDescription}>
                You could save 8% by adjusting temperature during lunch hours.
              </Text>
            </View>
            <ChevronRight size={20} color="#9ca3af" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.insightCard} activeOpacity={0.7}>
            <View style={[styles.insightIcon, { backgroundColor: '#ddd6fe' }]}>
              <Leaf size={20} color="#8b5cf6" />
            </View>
            <View style={styles.insightContent}>
              <Text style={styles.insightTitle}>Carbon Goal Progress</Text>
              <Text style={styles.insightDescription}>
                You're 73% towards your monthly carbon reduction goal.
              </Text>
            </View>
            <ChevronRight size={20} color="#9ca3af" />
          </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 24,
  },
  greeting: {
    fontSize: 16,
    color: '#6b7280',
    marginBottom: 4,
  },
  companyName: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
  },
  dateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    gap: 6,
  },
  dateText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#22c55e',
  },
  summaryContainer: {
    paddingHorizontal: 24,
    marginBottom: 32,
  },
  mainCard: {
    borderRadius: 16,
    padding: 24,
    marginBottom: 20,
  },
  mainCardTitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 8,
  },
  mainCardValue: {
    fontSize: 36,
    fontWeight: '700',
    color: 'white',
    marginBottom: 8,
  },
  mainCardSubtext: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    lineHeight: 20,
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  metricCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    width: (width - 60) / 2,
    alignItems: 'center',
  },
  metricIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f0f9ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  metricValue: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 4,
  },
  metricLabel: {
    fontSize: 12,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 8,
  },
  metricChange: {
    fontSize: 12,
    fontWeight: '600',
    color: '#22c55e',
  },
  chartContainer: {
    backgroundColor: 'white',
    marginHorizontal: 24,
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  periodSelector: {
    flexDirection: 'row',
    backgroundColor: '#f3f4f6',
    borderRadius: 8,
    padding: 2,
  },
  periodButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  periodButtonActive: {
    backgroundColor: 'white',
  },
  periodButtonText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#6b7280',
  },
  periodButtonTextActive: {
    color: '#22c55e',
  },
  insightsContainer: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  insightCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  insightIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#dcfce7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  insightContent: {
    flex: 1,
  },
  insightTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  insightDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 18,
  },
});