import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const questions = [
  { q: "When you're happy, you ___",               a: 1, choices: ["Cry", "Smile", "Yell"] },
  { q: "If you don't eat, you feel ___",           a: 2, choices: ["Tired", "Full", "Hungry"] },
  { q: "She feels ___ before the exam.",           a: 1, choices: ["Excited", "Nervous", "Sleepy"] },
  { q: "After running, I'm ___",                   a: 1, choices: ["Bored", "Thirsty", "Angry"] },
  { q: "When you're cold, you ___",                a: 2, choices: ["Sweat", "Jump", "Shiver"] },
  { q: "The opposite of 'big' is ___",             a: 0, choices: ["Small", "Tall", "Wide"] },
  { q: "When it's very hot, you feel ___",         a: 1, choices: ["Cold", "Warm", "Freezing"] },
  { q: "At night, the sky is ___",                 a: 2, choices: ["Bright", "Light", "Dark"] },
  { q: "When you're tired, you want to ___",       a: 1, choices: ["Run", "Sleep", "Dance"] },
  { q: "A baby animal is usually ___",             a: 0, choices: ["Small", "Big", "Old"] },
];

export default function VocabQuiz2() {
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
