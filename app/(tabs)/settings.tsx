import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Switch, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { User, Building2, Chrome as Home, Bell, Gauge, Globe, Shield, CircleHelp as HelpCircle, LogOut, ChevronRight, Mail, Star } from 'lucide-react-native';

export default function Settings() {
  const [profileType, setProfileType] = useState('sme'); // sme or household
  const [notifications, setNotifications] = useState({
    energySavings: true,
    weeklyReports: true,
    recommendations: false,
    anomalies: true,
  });
  const [units, setUnits] = useState({
    energy: 'kWh', // kWh or MWh
    carbon: 'kg', // kg or tons
  });

  const handleProfileSwitch = () => {
    Alert.alert(
      'Switch Profile Type',
      `Are you sure you want to switch to ${profileType === 'sme' ? 'Household' : 'SME'} profile?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Switch', 
          onPress: () => setProfileType(profileType === 'sme' ? 'household' : 'sme')
        },
      ]
    );
  };

  const handleLogout = () => {
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Sign Out', 
          style: 'destructive',
          onPress: () => router.replace('/onboarding')
        },
      ]
    );
  };

  const SettingItem = ({ icon, title, subtitle, onPress, showArrow = true, children }) => (
    <TouchableOpacity 
      style={styles.settingItem} 
      onPress={onPress}
      activeOpacity={onPress ? 0.7 : 1}
    >
      <View style={styles.settingIcon}>
        {icon}
      </View>
      <View style={styles.settingContent}>
        <Text style={styles.settingTitle}>{title}</Text>
        {subtitle && <Text style={styles.settingSubtitle}>{subtitle}</Text>}
        {children}
      </View>
      {showArrow && onPress && (
        <ChevronRight size={20} color="#d1d5db" />
      )}
    </TouchableOpacity>
  );

  const SectionHeader = ({ title }) => (
    <Text style={styles.sectionHeader}>{title}</Text>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Settings</Text>
          <Text style={styles.subtitle}>Customize your AIrth experience</Text>
        </View>

        {/* Profile Section */}
        <View style={styles.section}>
          <SectionHeader title="Profile" />
          
          <SettingItem
            icon={<User size={20} color="#6b7280" />}
            title="Account Information"
            subtitle="demo@airthapp.com"
            onPress={() => Alert.alert('Feature', 'Profile editing coming soon!')}
          />

          <SettingItem
            icon={profileType === 'sme' ? 
              <Building2 size={20} color="#6b7280" /> : 
              <Home size={20} color="#6b7280" />
            }
            title="Profile Type"
            subtitle={profileType === 'sme' ? 'Small & Medium Enterprise' : 'Household'}
            onPress={handleProfileSwitch}
          />
        </View>

        {/* Notifications Section */}
        <View style={styles.section}>
          <SectionHeader title="Notifications" />
          
          <SettingItem
            icon={<Bell size={20} color="#6b7280" />}
            title="Energy Savings Tips"
            subtitle="Get personalized recommendations"
            showArrow={false}
          >
            <Switch
              value={notifications.energySavings}
              onValueChange={(value) => 
                setNotifications(prev => ({ ...prev, energySavings: value }))
              }
              trackColor={{ false: '#e5e7eb', true: '#22c55e' }}
              thumbColor="white"
            />
          </SettingItem>

          <SettingItem
            icon={<Mail size={20} color="#6b7280" />}
            title="Weekly Reports"
            subtitle="Summary of your energy usage"
            showArrow={false}
          >
            <Switch
              value={notifications.weeklyReports}
              onValueChange={(value) => 
                setNotifications(prev => ({ ...prev, weeklyReports: value }))
              }
              trackColor={{ false: '#e5e7eb', true: '#22c55e' }}
              thumbColor="white"
            />
          </SettingItem>

          <SettingItem
            icon={<Star size={20} color="#6b7280" />}
            title="Achievement Alerts"
            subtitle="Celebrate your sustainability milestones"
            showArrow={false}
          >
            <Switch
              value={notifications.recommendations}
              onValueChange={(value) => 
                setNotifications(prev => ({ ...prev, recommendations: value }))
              }
              trackColor={{ false: '#e5e7eb', true: '#22c55e' }}
              thumbColor="white"
            />
          </SettingItem>
        </View>

        {/* Preferences Section */}
        <View style={styles.section}>
          <SectionHeader title="Preferences" />
          
          <SettingItem
            icon={<Gauge size={20} color="#6b7280" />}
            title="Energy Units"
            subtitle={`Currently: ${units.energy}`}
            onPress={() => {
              Alert.alert(
                'Energy Units',
                'Choose your preferred energy unit',
                [
                  { text: 'kWh', onPress: () => setUnits(prev => ({ ...prev, energy: 'kWh' })) },
                  { text: 'MWh', onPress: () => setUnits(prev => ({ ...prev, energy: 'MWh' })) },
                  { text: 'Cancel', style: 'cancel' },
                ]
              );
            }}
          />

          <SettingItem
            icon={<Globe size={20} color="#6b7280" />}
            title="Carbon Units"
            subtitle={`Currently: ${units.carbon} CO₂`}
            onPress={() => {
              Alert.alert(
                'Carbon Units',
                'Choose your preferred carbon unit',
                [
                  { text: 'kg CO₂', onPress: () => setUnits(prev => ({ ...prev, carbon: 'kg' })) },
                  { text: 'tons CO₂', onPress: () => setUnits(prev => ({ ...prev, carbon: 'tons' })) },
                  { text: 'Cancel', style: 'cancel' },
                ]
              );
            }}
          />
        </View>

        {/* Support Section */}
        <View style={styles.section}>
          <SectionHeader title="Support" />
          
          <SettingItem
            icon={<HelpCircle size={20} color="#6b7280" />}
            title="Help Center"
            subtitle="FAQs and troubleshooting"
            onPress={() => Alert.alert('Feature', 'Help center coming soon!')}
          />

          <SettingItem
            icon={<Shield size={20} color="#6b7280" />}
            title="Privacy & Security"
            subtitle="Manage your data and privacy"
            onPress={() => Alert.alert('Feature', 'Privacy settings coming soon!')}
          />
        </View>

        {/* App Info */}
        <View style={styles.appInfo}>
          <Text style={styles.appInfoText}>AIrth v1.0.0</Text>
          <Text style={styles.appInfoText}>Built with ❤️ for sustainability</Text>
        </View>

        {/* Logout Button */}
        <TouchableOpacity 
          style={styles.logoutButton} 
          onPress={handleLogout}
          activeOpacity={0.7}
        >
          <LogOut size={20} color="#ef4444" />
          <Text style={styles.logoutText}>Sign Out</Text>
        </TouchableOpacity>
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
  section: {
    marginBottom: 32,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 12,
    paddingHorizontal: 24,
  },
  settingItem: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  settingIcon: {
    marginRight: 16,
  },
  settingContent: {
    flex: 1,
  },
  settingTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
    marginBottom: 2,
  },
  settingSubtitle: {
    fontSize: 14,
    color: '#6b7280',
  },
  appInfo: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  appInfoText: {
    fontSize: 14,
    color: '#9ca3af',
    marginBottom: 4,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginHorizontal: 24,
    marginBottom: 32,
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
    borderWidth: 1,
    borderColor: '#fee2e2',
  },
  logoutText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ef4444',
  },
});