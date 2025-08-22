import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Building2, Chrome as Home, ChevronRight } from 'lucide-react-native';

export default function ProfileSelect() {
  const [selectedProfile, setSelectedProfile] = useState('sme');

  const handleContinue = () => {
    // Store the selected profile (in production, this would be saved to storage)
    router.push('/onboarding/login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Choose Your Profile</Text>
        <Text style={styles.subtitle}>
          Select the profile that best describes your energy monitoring needs
        </Text>

        <View style={styles.profileOptions}>
          <TouchableOpacity
            style={[
              styles.profileCard,
              selectedProfile === 'sme' && styles.profileCardSelected,
            ]}
            onPress={() => setSelectedProfile('sme')}
            activeOpacity={0.7}
          >
            <View style={styles.profileIcon}>
              <Building2 
                size={48} 
                color={selectedProfile === 'sme' ? '#22c55e' : '#6b7280'} 
              />
            </View>
            <Text style={[
              styles.profileTitle,
              selectedProfile === 'sme' && styles.profileTitleSelected,
            ]}>
              Small & Medium Enterprise
            </Text>
            <Text style={styles.profileDescription}>
              Perfect for businesses looking to optimize office energy consumption, 
              reduce operational costs, and meet sustainability targets.
            </Text>
            <View style={styles.profileFeatures}>
              <Text style={styles.featureItem}>• Multi-location monitoring</Text>
              <Text style={styles.featureItem}>• Team collaboration tools</Text>
              <Text style={styles.featureItem}>• Advanced analytics</Text>
              <Text style={styles.featureItem}>• Carbon credit marketplace</Text>
            </View>
            {selectedProfile === 'sme' && (
              <View style={styles.selectedBadge}>
                <Text style={styles.selectedBadgeText}>Recommended</Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.profileCard,
              selectedProfile === 'household' && styles.profileCardSelected,
            ]}
            onPress={() => setSelectedProfile('household')}
            activeOpacity={0.7}
          >
            <View style={styles.profileIcon}>
              <Home 
                size={48} 
                color={selectedProfile === 'household' ? '#22c55e' : '#6b7280'} 
              />
            </View>
            <Text style={[
              styles.profileTitle,
              selectedProfile === 'household' && styles.profileTitleSelected,
            ]}>
              Household
            </Text>
            <Text style={styles.profileDescription}>
              Ideal for families and individuals who want to monitor home energy 
              usage and reduce their environmental impact.
            </Text>
            <View style={styles.profileFeatures}>
              <Text style={styles.featureItem}>• Appliance monitoring</Text>
              <Text style={styles.featureItem}>• Family usage tracking</Text>
              <Text style={styles.featureItem}>• Cost savings insights</Text>
              <Text style={styles.featureItem}>• Simple recommendations</Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.continueButton}
          onPress={handleContinue}
          activeOpacity={0.8}
        >
          <Text style={styles.continueButtonText}>Continue</Text>
          <ChevronRight size={20} color="white" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
  profileOptions: {
    marginBottom: 40,
  },
  profileCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: '#e5e7eb',
    position: 'relative',
  },
  profileCardSelected: {
    borderColor: '#22c55e',
    backgroundColor: '#f0fdf4',
  },
  profileIcon: {
    marginBottom: 16,
  },
  profileTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },
  profileTitleSelected: {
    color: '#22c55e',
  },
  profileDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
    marginBottom: 16,
  },
  profileFeatures: {
    marginBottom: 8,
  },
  featureItem: {
    fontSize: 13,
    color: '#6b7280',
    marginBottom: 4,
  },
  selectedBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#22c55e',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  selectedBadgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: 'white',
  },
  continueButton: {
    backgroundColor: '#22c55e',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
  },
  continueButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});