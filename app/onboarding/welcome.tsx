import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Animated } from 'react-native';
import { router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChartBar as BarChart3, TrendingDown, Award, Users } from 'lucide-react-native';

const { width } = Dimensions.get('window');

const welcomeSteps = [
  {
    icon: BarChart3,
    title: 'Monitor Your Energy',
    description: 'Track real-time energy consumption across all your business operations with detailed analytics and insights.',
  },
  {
    icon: TrendingDown,
    title: 'Reduce CO₂ Emissions',
    description: 'Get personalized recommendations to optimize energy usage and significantly reduce your carbon footprint.',
  },
  {
    icon: Award,
    title: 'Earn Carbon Credits',
    description: 'Achieve sustainability goals and participate in our carbon credit marketplace to offset your emissions.',
  },
  {
    icon: Users,
    title: 'Join the Community',
    description: 'Connect with other eco-conscious businesses and share best practices for sustainable operations.',
  },
];

export default function Welcome() {
  const scrollViewRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [currentStep]);

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const step = Math.round(offsetX / width);
    setCurrentStep(step);
  };

  const handleNext = () => {
    if (currentStep < welcomeSteps.length - 1) {
      const nextStep = currentStep + 1;
      scrollViewRef.current?.scrollTo({ x: nextStep * width, animated: true });
      setCurrentStep(nextStep);
    } else {
      router.push('/onboarding/profile-select');
    }
  };

  const handleSkip = () => {
    router.push('/onboarding/profile-select');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.scrollView}
      >
        {welcomeSteps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <Animated.View key={index} style={[styles.stepContainer, { opacity: fadeAnim }]}>
              <View style={styles.iconContainer}>
                <IconComponent size={80} color="#22c55e" />
              </View>
              <Text style={styles.stepTitle}>{step.title}</Text>
              <Text style={styles.stepDescription}>{step.description}</Text>
            </Animated.View>
          );
        })}
      </ScrollView>

      <View style={styles.footer}>
        <View style={styles.pagination}>
          {welcomeSteps.map((_, index) => (
            <View
              key={index}
              style={[
                styles.paginationDot,
                { backgroundColor: currentStep === index ? '#22c55e' : '#e5e7eb' },
              ]}
            />
          ))}
        </View>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleNext}
          activeOpacity={0.8}
        >
          <Text style={styles.nextButtonText}>
            {currentStep === welcomeSteps.length - 1 ? 'Get Started' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  skipButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  skipText: {
    fontSize: 16,
    color: '#6b7280',
    fontWeight: '500',
  },
  scrollView: {
    flex: 1,
  },
  stepContainer: {
    width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  iconContainer: {
    marginBottom: 48,
  },
  stepTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 24,
  },
  stepDescription: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 16,
  },
  footer: {
    paddingHorizontal: 32,
    paddingBottom: 32,
    paddingTop: 24,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 32,
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  nextButton: {
    backgroundColor: '#22c55e',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
});