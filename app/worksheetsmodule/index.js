import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";

const worksheetTopics = ["Grammar", "Vocabulary", "Listening"];

export default function WorksheetsHome() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* Back button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/(tabs)/homepage')}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>
      
      <Text style={styles.heading}>Practice Worksheets</Text>
      {worksheetTopics.map((topic, idx) => (
        <TouchableOpacity
          key={idx}
          style={styles.topicBox}
          onPress={() => router.push(`/worksheetsmodule/${topic.toLowerCase()}`)}
        >
          <Text style={styles.topicText}>{topic}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#FEF9C3", padding: 20 },
  backButton: {
    position: 'absolute',
    top: 30,
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
    fontWeight: "bold",
    color: "#14532D",
    marginBottom: 20,
    textAlign: "center",
    paddingHorizontal: 20,
    paddingTop: 120,
    paddingBottom: 20,
  },
  topicBox: {
    backgroundColor: "#D9F99D",
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    borderColor: "#14532D",
    borderWidth: 2,
  },
  topicText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#166534",
    textAlign: "center",
  },
});
