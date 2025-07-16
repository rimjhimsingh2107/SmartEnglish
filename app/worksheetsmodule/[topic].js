import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { WebView } from "react-native-webview";

const pdfLinks = {
  grammar: [
    {
      title: "Tenses Practice",
      url: "https://downloads.bbc.co.uk/skillswise/english/en32tens/quiz/en32tens-e3-quiz.pdf",
    },
    {
      title: "Prepositions",
      url: "https://write.siu.edu/_common/documents/handouts/preposition-exercises.pdf",
    },
  ],
  vocabulary: [
    {
      title: "Synonyms Worksheet",
      url: "https://ingilizcetest.weebly.com/uploads/6/1/3/4/61346255/synonyms_tests_and_answers.pdf",
    },
  ],
  listening: [
    {
      title: "Short Conversations",
      url: "https://ingilizcetest.weebly.com/uploads/6/1/3/4/61346255/dialogue_completion_test_and_answer_key.pdf",
    },
  ],
};

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

export default function WorksheetTopicPage() {
  const { topic } = useLocalSearchParams();
  const router = useRouter();
  const topicKey = topic?.toLowerCase();
  const files = pdfLinks[topicKey] || [];

  const [visiblePdf, setVisiblePdf] = useState(null);

  return (
    <View style={{ flex: 1 }}>
      {!visiblePdf ? (
        <ScrollView contentContainerStyle={styles.container}>
          {/* Back button */}
          <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
          
          <Text style={styles.heading}>{capitalize(topic)} Worksheets</Text>
          {files.map((file, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.pdfBox}
              onPress={() => setVisiblePdf(file.url)}
            >
              <Text style={styles.pdfText}>{file.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <View style={styles.pdfContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setVisiblePdf(null)}
          >
            <Text style={styles.closeText}>✕</Text>
          </TouchableOpacity>
          <WebView
            source={{ uri: visiblePdf }}
            style={styles.webview}
            startInLoadingState={true}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FEF9C3",
    padding: 24,
    paddingTop: 80,
    gap: 20,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#14532D",
    marginBottom: 10,
    marginTop: 40,
  },
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
    left: 10,
    marginBottom: 10,
    marginTop: 20,
  },
  backButtonText: {
    fontSize: 15,
    color: "#14532D",
    fontWeight: "bold",
  },
  pdfBox: {
    backgroundColor: "#FDE68A",
    padding: 16,
    borderRadius: 16,
    borderColor: "#14532D",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  pdfText: {
    fontSize: 17,
    fontWeight: "600",
    color: "#14532D",
  },
  pdfContainer: {
    flex: 1,
    backgroundColor: "#FEF9C3",
    

  },
  closeButton: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 10,
    backgroundColor: "#F87171",
    padding: 10,
    borderRadius: 20,
  },
  closeText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  webview: {
    marginTop: 80,
    flex:1,
  },
});
