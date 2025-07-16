import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SmartEnglish</Text>
      <Text style={styles.subtitle}>Empowering every learner, one word at a time.</Text>

      <TouchableOpacity style={styles.signInButton} onPress={() => router.push('/signin')}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUpButton} onPress={() => router.push('/signup')}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF9C3',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#166534',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#14532D',
    marginBottom: 32,
  },
  signInButton: {
    backgroundColor: '#166534',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginBottom: 16,
  },
  signInText: {
    color: 'white',
    fontSize: 16,
  },
  signUpButton: {
    backgroundColor: '#FACC15',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 12,
  },
  signUpText: {
    color: '#14532D',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
