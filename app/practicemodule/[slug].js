import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { practiceBank } from './practiceData';

export default function PracticeQuiz() {
  const { slug } = useLocalSearchParams();
  const router = useRouter();

  const originalQuestions = practiceBank[slug];
  const [questions, setQuestions] = useState([...originalQuestions]);

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [selected, setSelected] = useState(null);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [round, setRound] = useState(1);
  const [questionOffset, setQuestionOffset] = useState(0);

  if (!originalQuestions || originalQuestions.length === 0) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>No questions found for "{slug}".</Text>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.back}>← Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const currentQuestion = questions[current];
  const actualQuestionNumber = questionOffset + current + 1;

  const handleAnswer = (option) => {
    const isCorrect = option === currentQuestion.opts[currentQuestion.ans];
    setTotalAnswered(totalAnswered + 1);
    
    if (isCorrect) {
      setScore(score + 1);
      setFeedback("Correct!");
    } else {
      // Add to wrong answers for repetition
      setWrongAnswers(prev => [...prev, currentQuestion]);
      setFeedback(`✗ Wrong!\n\n✓ Correct answer: ${currentQuestion.opts[currentQuestion.ans]}`);
    }
    setSelected(option);
    setShowFeedback(true);
    
    if (isCorrect) {
      setTimeout(() => {
        moveToNext(isCorrect);
      }, 1500);
    }
  };

  const moveToNext = (isCorrect) => {
    setShowFeedback(false);
    setSelected(null);
    
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else if (wrongAnswers.length > 0 && round === 1) {
      // Start second round with ALL wrong answers
      setQuestionOffset(originalQuestions.length);
      setQuestions([...wrongAnswers]);
      setCurrent(0);
      setWrongAnswers([]);
      setRound(2);
    } else if (wrongAnswers.length > 0 && round === 2) {
      // If there are still wrong answers in round 2, repeat them again
      setQuestionOffset(originalQuestions.length + (originalQuestions.length - wrongAnswers.length));
      setQuestions([...wrongAnswers]);
      setCurrent(0);
      setWrongAnswers([]);
      setRound(3);
    } else {
      // Quiz complete - score out of total questions answered
      const finalScore = score + (isCorrect ? 1 : 0);
      const finalTotal = totalAnswered + (isCorrect ? 1 : 0);
      router.push({
        pathname: "/practicemodule/practiceresult",
        params: { score: finalScore, total: finalTotal },
      });
    }
  };

  const goBack = () => {
    router.push('/practicemodule/practicetopicspage');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back button */}
      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Text style={styles.backButtonText}>← Back</Text>
      </TouchableOpacity>

      {/* Topic title with padding */}
      <Text style={styles.topicTitle}>{slug.replace(/-/g, ' ').toUpperCase()}</Text>
      
      <Text style={styles.title}>Question {actualQuestionNumber}</Text>
      <Text style={styles.question}>{currentQuestion.q}</Text>

      {currentQuestion.opts.map((opt, idx) => (
        <TouchableOpacity
          key={idx}
          style={[
            styles.option,
            selected === opt && {
              backgroundColor: opt === currentQuestion.opts[currentQuestion.ans] ? '#86EFAC' : '#FCA5A5',
            },
          ]}
          onPress={() => handleAnswer(opt)}
          disabled={showFeedback}
        >
          <Text style={styles.optionText}>{opt}</Text>
        </TouchableOpacity>
      ))}

      {showFeedback && (
        <View style={styles.feedbackContainer}>
          <Text style={[styles.feedback, feedback.includes("Wrong") && {color: "#DC2626"}]}>
            {feedback}
          </Text>
          {feedback.includes("Wrong") && (
            <TouchableOpacity 
              style={styles.nextButton} 
              onPress={() => moveToNext(false)}
            >
              <Text style={styles.nextButtonText}>Next Question</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#FEF9C3",
    flexGrow: 1,
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 20,
    zIndex: 1,
    backgroundColor: "#FACC15",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#14532D",
  },
  backButtonText: {
    fontSize: 16,
    color: "#14532D",
    fontWeight: "bold",
  },
  topicTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#14532D",
    textAlign: "center",
    marginTop: 100,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#14532D",
    marginBottom: 10,
  },
  question: {
    fontSize: 18,
    marginBottom: 16,
    color: "#166534",
  },
  option: {
    padding: 14,
    backgroundColor: "#FFF",
    borderWidth: 2,
    borderColor: "#14532D",
    borderRadius: 12,
    marginBottom: 12,
  },
  optionText: {
    fontSize: 16,
    color: "#14532D",
  },
  feedbackContainer: {
    marginTop: 20,
    alignItems: 'center',
    padding: 16,
    backgroundColor: "#FDE68A",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#14532D",
  },
  feedback: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#16A34A",
    marginBottom: 15,
    textAlign: "center",
    lineHeight: 24,
  },
  nextButton: {
    backgroundColor: "#14532D",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginTop: 10,
  },
  nextButtonText: {
    color: "#FEF9C3",
    fontSize: 16,
    fontWeight: "bold",
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  error: {
    color: "red",
    fontSize: 16,
    marginBottom: 10,
  },
  back: {
    color: "#14532D",
    fontWeight: "bold",
    fontSize: 16,
  },
});
