import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import axios from "axios";
import * as Speech from "expo-speech";
import { GEMINI_API_KEY, GEMINI_API_URL } from "../config/apiConfig";


const SymptomCheckerScreen = () => {
  const [query, setQuery] = useState("");
  const [chat, setChat] = useState<{ type: string; text: string }[]>([]);
  const [loading, setLoading] = useState(false);

  const sendQuery = async () => {
    if (!query.trim()) return;
    
    const newChat = [...chat, { type: "user", text: query }];
    setChat(newChat);
    setQuery("");
    setLoading(true);

    try {
      const response = await axios.post(GEMINI_API_URL, { prompt: query }, { params: { key: GEMINI_API_KEY } });


      const reply = response.data?.candidates?.[0]?.output || "I'm not sure, please consult a doctor.";
      setChat([...newChat, { type: "ai", text: reply }]);
      Speech.speak(reply);
    } catch (error) {
      console.error("Error processing query:", error);
      setChat([...newChat, { type: "ai", text: "Sorry, I couldn't process that. Please try again." }]);

    } finally {
      setLoading(false);
    }
  };

  const suggestedQueries = [
    "I have a fever and headache, what could it be?",
    "I feel dizzy and weak, should I be worried?",
    "What are symptoms of food poisoning?",
    "Can you suggest home remedies for cough?",
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Symptom Checker</Text>
      
      {/* Chat Messages */}
      <FlatList
        data={chat}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={[styles.chatBubble, item.type === "user" ? styles.userBubble : styles.aiBubble]}>
            <Text style={styles.chatText}>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 80 }}
      />

      {loading && <ActivityIndicator size="large" color="#007bff" style={styles.loadingIndicator} />}

      {/* Suggested Queries */}
      <View style={styles.suggestions}>
        {suggestedQueries.map((q, index) => (
          <TouchableOpacity key={index} style={styles.suggestion} onPress={() => setQuery(q)}>
            <Text style={styles.suggestionText}>{q}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Input Area */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Describe your symptoms..."
          value={query}
          onChangeText={setQuery}
        />
        <TouchableOpacity onPress={sendQuery} style={styles.sendButton}>
          <MaterialIcons name="send" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SymptomCheckerScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9f9f9", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  chatBubble: { padding: 12, marginVertical: 5, borderRadius: 8, maxWidth: "80%" },
  userBubble: { backgroundColor: "#007bff", alignSelf: "flex-end" },
  aiBubble: { backgroundColor: "#e5e5e5", alignSelf: "flex-start" },
  chatText: { fontSize: 16, color: "white" },
  loadingIndicator: { marginTop: 10, alignSelf: "center" },
  suggestions: { flexDirection: "row", flexWrap: "wrap", marginBottom: 10 },
  suggestion: { backgroundColor: "#ddd", padding: 8, borderRadius: 5, marginRight: 5, marginBottom: 5 },
  suggestionText: { fontSize: 14 },
  inputContainer: { flexDirection: "row", alignItems: "center", backgroundColor: "white", borderRadius: 25, paddingHorizontal: 15, elevation: 2 },
  input: { flex: 1, height: 45 },
  sendButton: { backgroundColor: "#007bff", padding: 10, borderRadius: 25 },
});
