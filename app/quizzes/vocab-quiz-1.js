import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const questions = [
  { q: "You use this to brush your teeth.",      a: 1, choices: ["Spoon", "Toothbrush", "Comb"] },
  { q: "You wear these on your feet.",           a: 1, choices: ["Gloves", "Shoes", "Hats"] },
  { q: "You write with a ___",                   a: 0, choices: ["Pen", "Knife", "Mug"] },
  { q: "You eat breakfast in the ___",           a: 1, choices: ["Night", "Morning", "Afternoon"] },
  { q: "You ___ your hands before eating.",      a: 1, choices: ["Shake", "Wash", "Bite"] },
  { q: "A ___ wakes you up.",                    a: 1, choices: ["Book", "Alarm clock", "Light"] },
  { q: "You ___ to school every day.",           a: 2, choices: ["Swim", "Drive", "Go"] },
  { q: "You sleep on a ___",                     a: 2, choices: ["Chair", "Sofa", "Bed"] },
  { q: "You eat with a ___",                     a: 0, choices: ["Fork", "Hammer", "Pencil"] },
  { q: "You use a ___ to carry your books.",     a: 1, choices: ["Box", "Backpack", "Plate"] },
];

export default function VocabQuiz1() {
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
