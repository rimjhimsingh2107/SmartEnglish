import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { WebView } from "react-native-webview";
import { useRouter } from "expo-router";

const stories = [
  {
    title: "📕 The Very Hungry Caterpillar",
    url: "https://www.youtube.com/embed/btFCtMhF3iI",
    level: "Easy",
  },
  {
    title: "🐢 The Tortoise and the Hare",
    url: "https://youtu.be/caX7v76Oasg?si=MwjI8aj-69NzlFor",
    level: "Easy",
  },
  {
    title: "🐻 Goldilocks and the Three Bears",
    url: "https://www.youtube.com/embed/Rm3JsewQIWw",
    level: "Easy",
  },
  {
    title: "🦊 The Fox and the Grapes",
    url: "https://youtu.be/feFDx8cZGNc?si=a4W_4Uf8Vc1vurt3",
    level: "Medium",
  },
  {
    title: "🐺 The Boy Who Cried Wolf",
    url: "https://youtu.be/1axKaW61_78?si=3GfH2tbGv9rEKwv2",
    level: "Medium",
  },
  {
    title: "🐉 The Gruffalo",
    url: "https://www.youtube.com/embed/s8sUPpPc8Ws",
    level: "Medium",
  },
  {
    title: "🧙 Room on the Broom",
    url: "https://www.youtube.com/embed/cWB0goTWZic",
    level: "Medium",
  },
  {
    title: "🐠 The Rainbow Fish",
    url: "https://www.youtube.com/embed/r9mryuEKkKc",
    level: "Hard",
  },
];

export default function StoriesPage() {
  const [currentStory, setCurrentStory] = useState(null);
  const router = useRouter();

  const openRandomStory = () => {
    const random = stories[Math.floor(Math.random() * stories.length)];
    setCurrentStory(random);
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "Easy":
        return "#15803D";
      case "Medium":
        return "#CA8A04";
      case "Hard":
        return "#DC2626";
      default:
        return "#000";
    }
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push("/(tabs)/homepage")}
      >
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.heading}>✨ Bedtime Stories ✨</Text>
        <Text style={styles.subheading}>
          Pick a story and drift into a world of imagination
        </Text>

        <TouchableOpacity style={styles.randomButton} onPress={openRandomStory}>
          <Text style={styles.randomText}>🎲 Surprise Me!</Text>
        </TouchableOpacity>
      </View>

      {/* Story Viewer box */}
      {currentStory && (
        <View style={styles.playerOverlay}>
          <View style={styles.playerContainer}>
            <WebView
              source={{ uri: currentStory.url }}
              style={styles.webview}
              allowsFullscreenVideo
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setCurrentStory(null)}
            >
              <Text style={styles.closeText}>✖</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Story List */}
      <ScrollView contentContainerStyle={styles.scroll}>
        {stories.map((story, index) => (
          <TouchableOpacity
            key={index}
            style={styles.storyCard}
            onPress={() => setCurrentStory(story)}
          >
            <Text style={styles.storyTitle}>{story.title}</Text>
            <Text
              style={[
                styles.level,
                { color: getLevelColor(story.level) },
              ]}
            >
              Difficulty: {story.level}
            </Text>
            <Text style={styles.hint}>Tap to view a magical story</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEF9C3",
  },
  header: {
    backgroundColor: "#FACC15",
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: "center",
    position: "relative",
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 15,
    zIndex: 100,
  },
  backText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#14532D",
  },
  
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#14532D",
    textAlign: "center",
  },
  subheading: {
    fontSize: 14,
    color: "#4B5563",
    marginTop: 6,
    textAlign: "center",
  },
  back: {
    position: "absolute",
    top: 20,
    left: 20,
    fontSize: 16,
    color: "#14532D",
    fontWeight: "bold",
  },
  randomButton: {
    height: 65,
    marginTop: 15,
    backgroundColor: "#14532D",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 14,
    borderRadius: 25,
  },
  randomText: {
    color: "#FEF9C3",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 13,
  },
  scroll: {
    padding: 20,
    paddingBottom: 80,
  },
  storyCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "#D1D5DB",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    height: 120,
    shadowOffset: { width: 0, height: 3 },
    elevation: 3,
  },
  storyTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#14532D",
    marginBottom: 4,
  },
  level: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#CA8A04",
    marginBottom: 4,
  },
  hint: {
    fontSize: 12,
    color: "#6B7280",
  },
  playerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  playerContainer: {
    width: Dimensions.get("window").width * 0.9,
    height: Dimensions.get("window").height * 0.5,
    backgroundColor: "#fffbe6",
    borderRadius: 30,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#166534",
  },
  webview: {
    flex: 1,
  },
  closeButton: {
    position: "absolute",
    top: 8,
    right: 12,
    zIndex: 10,
    backgroundColor: "#166534",
    borderRadius: 20,
    padding: 6,
  },
  closeText: {
    color: "#FEF9C3",
    fontWeight: "bold",
    fontSize: 12,
  },
});
