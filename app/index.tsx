import { Redirect } from 'expo-router';

export default function Index() {
  // For now, redirect to onboarding
  // In production, this would check auth state
  return <Redirect href="/onboarding" />;
}