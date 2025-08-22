import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Zap, Clock, Target, ChevronRight, CircleCheck as CheckCircle, Circle, Lightbulb, Thermometer, Monitor } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function Recommendations() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [completedTasks, setCompletedTasks] = useState(new Set());

  const categories = [
    { key: 'all', label: 'All Tips', count: 12 },
    { key: 'quick', label: 'Quick Wins', count: 5 },
    { key: 'weekly', label: 'Weekly Goals', count: 4 },
    { key: 'longterm', label: 'Long-term', count: 3 },
  ];

  const recommendations = [
    {
      id: 1,
      category: 'quick',
      title: 'Switch to LED Office Lighting',
      description: 'Replace remaining fluorescent bulbs with LED alternatives in conference rooms.',
      impact: 'High',
      effort: 'Low',
      timeframe: '2-3 days',
      savings: '15% lighting costs',
      icon: Lightbulb,
      color: '#22c55e',
      bgColor: '#dcfce7',
    },
    {
      id: 2,
      category: 'quick',
      title: 'Enable Equipment Sleep Mode',
      description: 'Configure computers and monitors to automatically sleep after 15 minutes of inactivity.',
      impact: 'Medium',
      effort: 'Very Low',
      timeframe: '1 hour',
      savings: '8% equipment costs',
      icon: Monitor,
      color: '#3b82f6',
      bgColor: '#dbeafe',
    },
    {
      id: 3,
      category: 'weekly',
      title: 'Optimize HVAC Schedule',
      description: 'Adjust heating and cooling to run only during business hours with 2-hour pre-cool/heat.',
      impact: 'Very High',
      effort: 'Medium',
      timeframe: '1 week setup',
      savings: '25% HVAC costs',
      icon: Thermometer,
      color: '#f59e0b',
      bgColor: '#fef3c7',
    },
    {
      id: 4,
      category: 'quick',
      title: 'Unplug Unused Equipment',
      description: 'Identify and unplug chargers, printers, and devices not in regular use.',
      impact: 'Low',
      effort: 'Very Low',
      timeframe: '30 minutes',
      savings: '3% phantom loads',
      icon: Zap,
      color: '#8b5cf6',
      bgColor: '#ddd6fe',
    },
    {
      id: 5,
      category: 'weekly',
      title: 'Implement Smart Power Strips',
      description: 'Install smart power strips that cut standby power to peripherals when main devices turn off.',
      impact: 'Medium',
      effort: 'Medium',
      timeframe: '3-5 days',
      savings: '12% office equipment',
      icon: Zap,
      color: '#ef4444',
      bgColor: '#fee2e2',
    },
    {
      id: 6,
      category: 'longterm',
      title: 'Solar Panel Installation',
      description: 'Install rooftop solar panels to generate renewable energy for office operations.',
      impact: 'Very High',
      effort: 'High',
      timeframe: '2-3 months',
      savings: '40-60% electricity costs',
      icon: Target,
      color: '#22c55e',
      bgColor: '#dcfce7',
    },
    {
      id: 7,
      category: 'quick',
      title: 'Adjust Thermostat Settings',
      description: 'Lower heating by 2°C in winter and raise cooling by 2°C in summer.',
      impact: 'High',
      effort: 'Very Low',
      timeframe: '5 minutes',
      savings: '18% HVAC costs',
      icon: Thermometer,
      color: '#f59e0b',
      bgColor: '#fef3c7',
    },
    {
      id: 8,
      category: 'weekly',
      title: 'Energy Audit Training',
      description: 'Train employees on energy-saving habits and awareness programs.',
      impact: 'Medium',
      effort: 'Medium',
      timeframe: '2 weeks',
      savings: '10% overall usage',
      icon: Target,
      color: '#3b82f6',
      bgColor: '#dbeafe',
    },
  ];

  const filteredRecommendations = selectedCategory === 'all' 
    ? recommendations 
    : recommendations.filter(rec => rec.category === selectedCategory);

  const toggleTaskCompletion = (taskId) => {
    const newCompleted = new Set(completedTasks);
    if (completedTasks.has(taskId)) {
      newCompleted.delete(taskId);
    } else {
      newCompleted.add(taskId);
    }
    setCompletedTasks(newCompleted);
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case 'Very High': return '#22c55e';
      case 'High': return '#f59e0b';
      case 'Medium': return '#3b82f6';
      case 'Low': return '#6b7280';
      default: return '#6b7280';
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>AI Recommendations</Text>
          <Text style={styles.subtitle}>Personalized tips to optimize your energy usage</Text>
        </View>

        {/* Progress Summary */}
        <View style={styles.progressContainer}>
          <View style={styles.progressCard}>
            <Text style={styles.progressTitle}>This Week's Progress</Text>
            <View style={styles.progressStats}>
              <View style={styles.progressStat}>
                <Text style={styles.progressNumber}>7</Text>
                <Text style={styles.progressLabel}>Completed</Text>
              </View>
              <View style={styles.progressStat}>
                <Text style={styles.progressNumber}>$142</Text>
                <Text style={styles.progressLabel}>Saved</Text>
              </View>
              <View style={styles.progressStat}>
                <Text style={styles.progressNumber}>23kg</Text>
                <Text style={styles.progressLabel}>CO₂ Reduced</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Category Filter */}
        <View style={styles.categoryContainer}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryContent}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category.key}
                style={[
                  styles.categoryButton,
                  selectedCategory === category.key && styles.categoryButtonActive,
                ]}
                onPress={() => setSelectedCategory(category.key)}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.categoryButtonText,
                    selectedCategory === category.key && styles.categoryButtonTextActive,
                  ]}
                >
                  {category.label}
                </Text>
                <View
                  style={[
                    styles.categoryCount,
                    selectedCategory === category.key && styles.categoryCountActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.categoryCountText,
                      selectedCategory === category.key && styles.categoryCountTextActive,
                    ]}
                  >
                    {category.count}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Recommendations List */}
        <View style={styles.recommendationsContainer}>
          {filteredRecommendations.map((rec) => {
            const IconComponent = rec.icon;
            const isCompleted = completedTasks.has(rec.id);
            
            return (
              <TouchableOpacity
                key={rec.id}
                style={[styles.recommendationCard, isCompleted && styles.recommendationCardCompleted]}
                activeOpacity={0.7}
              >
                <TouchableOpacity
                  onPress={() => toggleTaskCompletion(rec.id)}
                  style={styles.checkboxContainer}
                >
                  {isCompleted ? (
                    <CheckCircle size={24} color="#22c55e" />
                  ) : (
                    <Circle size={24} color="#d1d5db" />
                  )}
                </TouchableOpacity>

                <View style={[styles.recommendationIcon, { backgroundColor: rec.bgColor }]}>
                  <IconComponent size={24} color={rec.color} />
                </View>

                <View style={styles.recommendationContent}>
                  <Text style={[styles.recommendationTitle, isCompleted && styles.recommendationTitleCompleted]}>
                    {rec.title}
                  </Text>
                  <Text style={styles.recommendationDescription}>
                    {rec.description}
                  </Text>
                  
                  <View style={styles.recommendationMeta}>
                    <View style={styles.metaItem}>
                      <View style={[styles.impactDot, { backgroundColor: getImpactColor(rec.impact) }]} />
                      <Text style={styles.metaText}>{rec.impact} Impact</Text>
                    </View>
                    <View style={styles.metaItem}>
                      <Clock size={12} color="#6b7280" />
                      <Text style={styles.metaText}>{rec.timeframe}</Text>
                    </View>
                  </View>

                  <Text style={styles.savingsText}>💰 Save: {rec.savings}</Text>
                </View>

                <ChevronRight size={20} color="#d1d5db" />
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Achievement Banner */}
        <View style={styles.achievementBanner}>
          <Text style={styles.achievementTitle}>🏆 Great Progress!</Text>
          <Text style={styles.achievementText}>
            You've completed 7 energy-saving actions this month. 
            Keep it up to reach your sustainability goals!
          </Text>
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
  progressContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  progressCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
  },
  progressTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  progressStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  progressStat: {
    alignItems: 'center',
  },
  progressNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: '#22c55e',
    marginBottom: 4,
  },
  progressLabel: {
    fontSize: 12,
    color: '#6b7280',
  },
  categoryContainer: {
    paddingBottom: 24,
  },
  categoryContent: {
    paddingHorizontal: 24,
    gap: 12,
  },
  categoryButton: {
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
  categoryButtonActive: {
    backgroundColor: '#22c55e',
    borderColor: '#22c55e',
  },
  categoryButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
  },
  categoryButtonTextActive: {
    color: 'white',
  },
  categoryCount: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    minWidth: 24,
    alignItems: 'center',
  },
  categoryCountActive: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  categoryCountText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#6b7280',
  },
  categoryCountTextActive: {
    color: 'white',
  },
  recommendationsContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  recommendationCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  recommendationCardCompleted: {
    backgroundColor: '#f9fafb',
    opacity: 0.7,
  },
  checkboxContainer: {
    marginRight: 12,
    marginTop: 2,
  },
  recommendationIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  recommendationContent: {
    flex: 1,
  },
  recommendationTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 6,
  },
  recommendationTitleCompleted: {
    textDecorationLine: 'line-through',
    color: '#6b7280',
  },
  recommendationDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
    marginBottom: 12,
  },
  recommendationMeta: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 8,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  impactDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  metaText: {
    fontSize: 12,
    color: '#6b7280',
  },
  savingsText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#22c55e',
  },
  achievementBanner: {
    backgroundColor: 'white',
    marginHorizontal: 24,
    marginBottom: 32,
    borderRadius: 12,
    padding: 20,
    borderLeftWidth: 4,
    borderLeftColor: '#22c55e',
  },
  achievementTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  achievementText: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
});