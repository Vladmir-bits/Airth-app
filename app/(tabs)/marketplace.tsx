import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Coins, TrendingUp, Shield, Clock, Info, Star, ChevronRight } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function Marketplace() {
  const [selectedTab, setSelectedTab] = useState('overview');

  const carbonCredits = [
    {
      id: 1,
      name: 'Forest Restoration - Brazil',
      type: 'Reforestation',
      price: 12.50,
      rating: 4.8,
      verified: true,
      available: 2500,
      description: 'Support rainforest restoration in the Amazon basin',
      impact: '1 ton CO₂ per credit',
      certification: 'VCS Verified',
    },
    {
      id: 2,
      name: 'Wind Energy - India',
      type: 'Renewable Energy',
      price: 8.75,
      rating: 4.6,
      verified: true,
      available: 5000,
      description: 'Clean wind energy generation in rural India',
      impact: '1 ton CO₂ per credit',
      certification: 'Gold Standard',
    },
    {
      id: 3,
      name: 'Methane Capture - USA',
      type: 'Waste Management',
      price: 15.25,
      rating: 4.9,
      verified: true,
      available: 1200,
      description: 'Landfill methane capture and energy generation',
      impact: '1 ton CO₂ per credit',
      certification: 'CAR Verified',
    },
  ];

  const renderOverview = () => (
    <View style={styles.overviewContainer}>
      {/* Coming Soon Banner */}
      <LinearGradient
        colors={['#22c55e', '#16a34a']}
        style={styles.comingSoonBanner}
      >
        <View style={styles.bannerIcon}>
          <Coins size={32} color="white" />
        </View>
        <Text style={styles.bannerTitle}>AIrth Carbon Credit Marketplace</Text>
        <Text style={styles.bannerSubtitle}>Coming Soon</Text>
        <Text style={styles.bannerDescription}>
          Soon, SMEs will be able to purchase verified carbon credits directly within AIrth to offset their carbon footprint and achieve net-zero goals.
        </Text>
      </LinearGradient>

      {/* Features Preview */}
      <View style={styles.featuresContainer}>
        <Text style={styles.featuresTitle}>What to Expect</Text>
        
        <View style={styles.featureCard}>
          <View style={[styles.featureIcon, { backgroundColor: '#dcfce7' }]}>
            <Shield size={24} color="#22c55e" />
          </View>
          <View style={styles.featureContent}>
            <Text style={styles.featureTitle}>Verified Carbon Credits</Text>
            <Text style={styles.featureDescription}>
              Only purchase credits from verified, high-quality carbon offset projects
            </Text>
          </View>
        </View>

        <View style={styles.featureCard}>
          <View style={[styles.featureIcon, { backgroundColor: '#dbeafe' }]}>
            <TrendingUp size={24} color="#3b82f6" />
          </View>
          <View style={styles.featureContent}>
            <Text style={styles.featureTitle}>Real-time Pricing</Text>
            <Text style={styles.featureDescription}>
              Access live market prices for carbon credits from various project types
            </Text>
          </View>
        </View>

        <View style={styles.featureCard}>
          <View style={[styles.featureIcon, { backgroundColor: '#fef3c7' }]}>
            <Clock size={24} color="#f59e0b" />
          </View>
          <View style={styles.featureContent}>
            <Text style={styles.featureTitle}>Instant Offsetting</Text>
            <Text style={styles.featureDescription}>
              Automatically offset your carbon emissions with a single tap
            </Text>
          </View>
        </View>
      </View>

      {/* Blockchain Integration */}
      <View style={styles.blockchainContainer}>
        <Text style={styles.blockchainTitle}>🔗 Blockchain-Powered</Text>
        <Text style={styles.blockchainDescription}>
          Our marketplace will leverage blockchain technology to ensure transparency, 
          traceability, and authenticity of all carbon credit transactions.
        </Text>
        
        <View style={styles.blockchainFeatures}>
          <Text style={styles.blockchainFeature}>• Immutable transaction records</Text>
          <Text style={styles.blockchainFeature}>• Smart contract automation</Text>
          <Text style={styles.blockchainFeature}>• Real-time verification</Text>
          <Text style={styles.blockchainFeature}>• Global accessibility</Text>
        </View>
      </View>
    </View>
  );

  const renderPreview = () => (
    <View style={styles.previewContainer}>
      <Text style={styles.previewTitle}>Marketplace Preview</Text>
      <Text style={styles.previewSubtitle}>
        Here's what the carbon credit marketplace will look like:
      </Text>

      {carbonCredits.map((credit) => (
        <TouchableOpacity key={credit.id} style={styles.creditCard} activeOpacity={0.7}>
          <View style={styles.creditHeader}>
            <View>
              <Text style={styles.creditName}>{credit.name}</Text>
              <Text style={styles.creditType}>{credit.type}</Text>
            </View>
            <View style={styles.creditPrice}>
              <Text style={styles.priceAmount}>${credit.price}</Text>
              <Text style={styles.priceUnit}>per credit</Text>
            </View>
          </View>

          <Text style={styles.creditDescription}>{credit.description}</Text>

          <View style={styles.creditMeta}>
            <View style={styles.metaItem}>
              <Star size={14} color="#f59e0b" />
              <Text style={styles.metaText}>{credit.rating}</Text>
            </View>
            <View style={styles.metaItem}>
              <Shield size={14} color="#22c55e" />
              <Text style={styles.metaText}>{credit.certification}</Text>
            </View>
            <View style={styles.metaItem}>
              <Text style={styles.metaText}>{credit.available} available</Text>
            </View>
          </View>

          <View style={styles.creditFooter}>
            <Text style={styles.impactText}>{credit.impact}</Text>
            <ChevronRight size={16} color="#6b7280" />
          </View>
        </TouchableOpacity>
      ))}

      <View style={styles.previewNotice}>
        <Info size={20} color="#3b82f6" />
        <Text style={styles.noticeText}>
          This is a preview of the upcoming marketplace. Actual credits and prices may vary.
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Carbon Credits</Text>
          <Text style={styles.subtitle}>Offset your emissions with verified credits</Text>
        </View>

        {/* Tab Selector */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'overview' && styles.tabActive]}
            onPress={() => setSelectedTab('overview')}
          >
            <Text style={[styles.tabText, selectedTab === 'overview' && styles.tabTextActive]}>
              Overview
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'preview' && styles.tabActive]}
            onPress={() => setSelectedTab('preview')}
          >
            <Text style={[styles.tabText, selectedTab === 'preview' && styles.tabTextActive]}>
              Preview
            </Text>
          </TouchableOpacity>
        </View>

        {/* Content */}
        {selectedTab === 'overview' ? renderOverview() : renderPreview()}
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
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginBottom: 24,
    backgroundColor: '#f3f4f6',
    borderRadius: 12,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  tabActive: {
    backgroundColor: 'white',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6b7280',
  },
  tabTextActive: {
    color: '#22c55e',
    fontWeight: '600',
  },
  overviewContainer: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  comingSoonBanner: {
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    marginBottom: 24,
  },
  bannerIcon: {
    marginBottom: 16,
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: 'white',
    marginBottom: 8,
    textAlign: 'center',
  },
  bannerSubtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'rgba(255, 255, 255, 0.9)',
    marginBottom: 16,
  },
  bannerDescription: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
    lineHeight: 20,
  },
  featuresContainer: {
    marginBottom: 24,
  },
  featuresTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 16,
  },
  featureCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  featureIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
  blockchainContainer: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
  },
  blockchainTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 12,
  },
  blockchainDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
    marginBottom: 16,
  },
  blockchainFeatures: {
    gap: 8,
  },
  blockchainFeature: {
    fontSize: 14,
    color: '#374151',
  },
  previewContainer: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  previewTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 8,
  },
  previewSubtitle: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 20,
  },
  creditCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  creditHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  creditName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  creditType: {
    fontSize: 12,
    color: '#6b7280',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  creditPrice: {
    alignItems: 'flex-end',
  },
  priceAmount: {
    fontSize: 18,
    fontWeight: '700',
    color: '#22c55e',
  },
  priceUnit: {
    fontSize: 12,
    color: '#6b7280',
  },
  creditDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
    marginBottom: 12,
  },
  creditMeta: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 12,
  },
  metaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    color: '#6b7280',
  },
  creditFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  impactText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#22c55e',
  },
  previewNotice: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#dbeafe',
    borderRadius: 8,
    padding: 12,
    marginTop: 12,
    gap: 8,
  },
  noticeText: {
    flex: 1,
    fontSize: 12,
    color: '#1e40af',
    lineHeight: 16,
  },
});