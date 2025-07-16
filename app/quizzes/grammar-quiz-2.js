import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const questions = [
  { q: "I ___ my keys yesterday.",  a: 0, choices: ["lost", "was losing"] },
  { q: "While I ___, the phone rang.",     a: 1, choices: ["watched TV", "was watching TV"] },
  { q: "They ___ in the park when it started to rain.",   a: 1, choices: ["walked", "were walking"] },
  { q: "She ___ dinner when we arrived.",                a: 1, choices: ["cooked", "was cooking"] },
  { q: "I ___ to music while studying..",             a: 0, choices: ["was listening", "listened"] },
  { q: "What ___ at 7 PM?",    a: 1, choices: ["did you do", "were you doing"] },
  { q: "He ___ when I called him.",         a: 1, choices: ["slept", "was sleeping"] },
  { q: "We ___ the movie last night.",     a: 0, choices: ["watched", "were watching"] },
  { q: "They ___ for a bus when I saw them.",          a: 1, choices: ["waited", "were waiting"] },
  { q: "I ___ an email when the power went out.",   a: 0, choices: ["was writing", "wrote"] },
];

export default function GrammarQuiz2() {
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
