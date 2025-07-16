import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const questions = [
  { q: "I saw ___ elephant at the zoo.",               a: 1, choices: ["a", "an", "the"] },
  { q: "She's sitting ___ the table.",                  a: 2, choices: ["on", "in", "at"] },
  { q: "We arrived ___ the airport early.",                  a: 2, choices: ["on", "to", "at"] },
  { q: "I bought ___ new book yesterday.",                   a: 1, choices: ["the", "a", "an"] },
  { q: "He lives ___ New York.",                             a: 0, choices: ["in", "at", "on"] },
  { q: "The cat is hiding ___ the sofa.",                    a: 0, choices: ["under", "on", "beside"] },
  { q: "I put sugar ___ my tea.",                            a: 0, choices: ["in", "on", "at"] },
  { q: "They went ___ vacation last week.",                  a: 1, choices: ["to", "on", "for"] },
  { q: "I listened ___ music all day.",                      a: 0, choices: ["to", "for", "at"] },
  { q: "This is ___ best movie ever!",                       a: 2, choices: ["a", "an", "the"] },
];

export default function GrammarQuiz3() {
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
