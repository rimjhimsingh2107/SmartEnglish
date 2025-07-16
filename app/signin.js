import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Redirect, useRouter } from "expo-router";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const router = useRouter();

  if (redirect) return <Redirect href="/(tabs)/homepage" />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#6B7280"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#6B7280"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

      {/* Sign In */}
      <TouchableOpacity style={styles.button} onPress={() => setRedirect(true)}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Forgot Password */}
     <TouchableOpacity onPress={() => {/* add logic later */}}>
        <Text style={styles.linkText}>Forgot Password?</Text>
      </TouchableOpacity>
      {/* Create Account */}
      <TouchableOpacity onPress={() => router.push("/signup")}>
      <Text style={styles.createText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  createText: {
    color: "#CA8A04", // dark golden yellow
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 8,
  },
  
  container: {
    flex: 1,
    backgroundColor: "#FEF9C3",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#166534",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginBottom: 16,
    fontSize: 16,
    borderColor: "#D1D5DB",
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#166534",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 16,
    marginBottom: 12,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkText: {
    color: "#166534",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 8,
  },
});
