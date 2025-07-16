import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const questions = [
  { q: "Listen: What did she say?",                a: 1, choices: ["I'm tired", "I'm hungry", "I'm happy"] },
  { q: "What time did he mention?",                a: 0, choices: ["3 o'clock", "4 o'clock", "5 o'clock"] },
  { q: "Where are they going?",                    a: 2, choices: ["School", "Home", "Park"] },
  { q: "What's the weather like?",                 a: 1, choices: ["Cold", "Sunny", "Rainy"] },
  { q: "What did they buy?",                       a: 0, choices: ["Bread", "Milk", "Eggs"] },
  { q: "How does she feel?",                       a: 2, choices: ["Sad", "Angry", "Excited"] },
  { q: "What's his favorite color?",               a: 1, choices: ["Red", "Blue", "Green"] },
  { q: "When is the meeting?",                     a: 0, choices: ["Monday", "Tuesday", "Wednesday"] },
  { q: "What did they eat?",                       a: 2, choices: ["Soup", "Salad", "Pizza"] },
  { q: "How many books does she have?",            a: 1, choices: ["Two", "Three", "Four"] },
];

export default function ListeningQuiz1() {
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const router = useRouter();
  const cur = questions[idx];

  const select = (choiceIdx) => {
    if (choiceIdx === cur.a) setScore(score + 1);
    if (idx + 1 < questions.length) setIdx(idx + 1);
    else router.push({ pathname: "/quizzes/result", params: { score, total: questions.length } });
  };

  return (
    <View style={styles.container}>
      {/* Back button */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Question {idx + 1} of {questions.length}</Text>
      <Text style={styles.question}>{cur.q}</Text>

      {cur.choices.map((c, i) => (
        <TouchableOpacity key={i} style={styles.choice} onPress={() => select(i)}>
          <Text style={styles.choiceText}>{c}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEF9C3",
    padding: 24,
    justifyContent: "center",
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    backgroundColor: "#FACC15",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#14532D",
    zIndex: 1,
  },
  backButtonText: {
    fontSize: 16,
    color: "#14532D",
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#14532D",
    marginBottom: 24,
    textAlign: "center",
  },
  question: {
    fontSize: 22,
    fontWeight: "600",
    color: "#14532D",
    marginBottom: 24,
    textAlign: "center",
  },
  choice: {
    backgroundColor: "#FDE68A",
    borderWidth: 2,
    borderColor: "#14532D",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  choiceText: {
    fontSize: 18,
    color: "#14532D",
    fontWeight: "500",
    textAlign: "center",
  },
});
