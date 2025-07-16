import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

const topics = [
  {
    title: 'Grammar',
    subtopics: ['Tenses', 'Prepositions', 'Articles', 'Pronouns'],
  },
  {
    title: 'Vocabulary',
    subtopics: ['Synonyms & Antonyms', 'Word Families', 'Phrasal Verbs'],
  },
  {
    title: 'Listening',
    subtopics: ['Short Conversations', 'Stories', 'Questions & Responses'],
  },
];

export default function PracticeTopics() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* Back button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/(tabs)/homepage')}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>
      
      <Text style={styles.heading}>Practice Topics</Text>
      {topics.map((topic, index) => (
        <View key={index} style={styles.topicBlock}>
          <TouchableOpacity
            style={styles.mainTopic}
            onPress={() => router.push(`/practicemodule/${topic.title.toLowerCase()}`)}
          >
            <Text style={styles.mainTopicText}>{topic.title}</Text>
          </TouchableOpacity>
          <View style={styles.subtopicsWrap}>
            {topic.subtopics.map((sub, idx) => (
              <TouchableOpacity
                key={idx}
                style={styles.subtopic}
                onPress={() => router.push(`/practicemodule/${topic.title.toLowerCase()}-${sub.toLowerCase().replace(/ /g, '-')}`)}
              >
                <Text style={styles.subtopicText}>{sub}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FEF9C3',
    padding: 20,
    paddingTop: 60,
  },
  backButton: {
    position: 'absolute',
    backgroundColor: "#FACC15",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#14532D",
    zIndex: 1,
    left: -10,

  },
  backButtonText: {
    fontSize: 16,
    color: "#14532D",
    fontWeight: "bold",
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#14532D',
    marginBottom: 20,
    marginTop: 60,
    textAlign: 'center',
  },
  topicBlock: {
    marginBottom: 28,
  },
  mainTopic: {
    backgroundColor: '#BBF7D0',
    padding: 16,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#14532D',
    marginBottom: 10,
  },
  mainTopicText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#166534',
  },
  subtopicsWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  subtopic: {
    backgroundColor: '#FDE68A',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#14532D',
    marginRight: 10,
    marginBottom: 10,
  },
  subtopicText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#14532D',
  },
});
