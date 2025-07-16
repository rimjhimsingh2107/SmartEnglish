import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const topics = {
  Grammar: [
    { label: 'Quiz 1', path: '/quizzes/grammar-quiz-1' },
    { label: 'Quiz 2', path: '/quizzes/grammar-quiz-2' },
    { label: 'Quiz 3', path: '/quizzes/grammar-quiz-3' },
  ],
  Vocabulary: [
    { label: 'Quiz 1', path: '/quizzes/vocab-quiz-1' },
    { label: 'Quiz 2', path: '/quizzes/vocab-quiz-2' },
  ],
  Listening: [
    { label: 'Quiz 1', path: '/quizzes/listening-quiz-1' },
  ],
};

export default function QuizPage() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Choose a Topic</Text>
      {Object.entries(topics).map(([topic, quizzes]) => (
        <View key={topic} style={styles.topicBlock}>
          <Text style={styles.topic}>{topic}</Text>
          {quizzes.map((quiz) => (
            <TouchableOpacity
              key={quiz.label}
              style={styles.quizBox}
              onPress={() => router.push(quiz.path)}
            >
              <Text style={styles.quizText}>{quiz.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEF9C3',
    padding: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#166534',
    marginBottom: 20,
    paddingTop: 80,
 
    
  },
  topicBlock: {
    marginBottom: 24,
  },
  topic: {
    fontSize: 20,
    fontWeight: '600',
    color: '#14532D',
    marginBottom: 10,
  },
  quizBox: {
    backgroundColor: '#D9F99D',
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
    borderColor: '#14532D',
    borderWidth: 1,
  },
  quizText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#166534',
  },
});
