import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function Result() {
  const { score, total } = useLocalSearchParams();
  const router = useRouter();
  const pct = Math.round((score / total) * 100);

  let msg = "Great job! 🎉";
  if (pct < 50) msg = "Keep practising! 💪";
  else if (pct < 80) msg = "Well done! 👍";

  return (
    <View style={st.wrap}>
      <Text style={st.big}>{score}/{total}</Text>
      <Text style={st.msg}>{msg}</Text>

      <TouchableOpacity style={st.home} onPress={() => router.push("/(tabs)/homepage")}>
        <Text style={st.homeTxt}>← Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const st = StyleSheet.create({
  wrap:{flex:1,backgroundColor:"#FEF9C3",alignItems:"center",justifyContent:"center",padding:24},
  big:{fontSize:48,fontWeight:"bold",color:"#14532D"},
  msg:{fontSize:20,color:"#14532D",marginVertical:20,textAlign:"center"},
  home:{marginTop:24,padding:12,paddingHorizontal:20,backgroundColor:"#14532D",borderRadius:14},
  homeTxt:{color:"#FEF9C3",fontWeight:"600"},
});
