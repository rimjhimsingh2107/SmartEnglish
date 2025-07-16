import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from "react-native";
import { useRouter } from "expo-router";
import students from "../../assets/students.png";

const options = ["View Modules", "Practice Questions", "Worksheets", "Watch Stories"];

export default function HomePage() {
  const userName = "Rimjhim";
  const screenHeight = Dimensions.get("window").height;
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={[styles.header, { height: screenHeight * 0.35 }]}>
        <Image source={students} style={styles.image} resizeMode="contain" />
        <Text style={styles.welcome}>Welcome, {userName}!</Text>
        <Text style={styles.subheading}>Are you ready to improve your English?</Text>
      </View>

      <View style={styles.gridContainer}>
        {options.map((label) => (
          <TouchableOpacity
            key={label}
            style={styles.box}
            onPress={() => {
              if (label === "Watch Stories") {
                router.push("/stories");
              }
              if (label === "Practice Questions") {
                router.push("/practicemodule/practicetopicspage");
              }
              if (label === "Worksheets") {
                router.push("/worksheetsmodule");
              }
              
            }}
          >
            <Text style={styles.boxText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FEF9C3",
  },
  header: {
    backgroundColor: "#14532D",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  welcome: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FEF9C3",
    marginBottom: 8,
    textAlign: "center",
  },
  image: {
    width: 108,
    height: 130,
    marginBottom: 8,
  },
  subheading: {
    fontSize: 16,
    color: "#D1FAE5",
    textAlign: "center",
  },
  gridContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 20,
    justifyContent: "space-between",
  },
  box: {
    width: "49%",
    height: "48%",
    aspectRatio: 1,
    backgroundColor: "#FDE68A",
    borderWidth: 2,
    borderColor: "#166534",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  boxText: {
    color: "#14532D",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
