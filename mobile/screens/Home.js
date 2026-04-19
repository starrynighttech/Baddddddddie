import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { Video } from "expo-av"

export default function Home() {
  return (
    <View style={styles.container}>
      <Video
        source={require("../assets/smoke.mp4")}
        style={StyleSheet.absoluteFill}
        resizeMode="cover"
        isLooping
        shouldPlay
        isMuted
      />

      <View style={styles.overlay}>
        <Text style={styles.title}>Earn Together</Text>
        <Text style={styles.sub}>Shake • Watch • Refer • Earn</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  overlay: {
    position: "absolute",
    top: "40%",
    width: "100%",
    alignItems: "center"
  },
  title: {
    fontSize: 40,
    color: "white",
    fontWeight: "bold"
  },
  sub: {
    color: "white",
    marginTop: 10
  }
})
