import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function PracticeResult() {
  const { score, total } = useLocalSearchParams();
  const router = useRouter();

  const percentage = Math.round((parseInt(score) / parseInt(total)) * 100);
  let message = '';

  if (percentage === 100) message = "🎉 Perfect Score! You're a star!";
  else if (percentage >= 80) message = "💪 Great job! Keep it up!";
  else if (percentage >= 50) message = "👍 Not bad, keep practicing!";
  else message = "💡 Let's keep working on it!";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎯 Quiz Completed!</Text>
      <Text style={styles.score}>You scored {score} out of {total}</Text>
      <Text style={styles.message}>{message}</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.replace('/practicemodule/practicetopicspage')}>
        <Text style={styles.buttonText}>← Back to Topics</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF9C3',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#14532D',
    marginBottom: 20,
  },
  score: {
    fontSize: 22,
    color: '#166534',
    marginBottom: 12,
  },
  message: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#4B5563',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#14532D',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 14,
  },
  buttonText: {
    color: '#FEF9C3',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
