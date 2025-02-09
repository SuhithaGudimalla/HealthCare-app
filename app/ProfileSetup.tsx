import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { launchImageLibrary } from "react-native-image-picker";

const ProfileSetup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [language, setLanguage] = useState("English"); // Default language
  const [profileImage, setProfileImage] = useState("https://img.icons8.com/ios-filled/100/user-male-circle.png");
  const [saved, setSaved] = useState(false);

  // Handle image picker
  const handleImagePicker = () => {
    const options = {
      mediaType: "photo",
      quality: 1,
    };

    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.errorCode) {
        console.log("ImagePicker Error: ", response.errorMessage);
      } else {
        const selectedImage = response.assets[0].uri; // Get the selected image URI
        setProfileImage(selectedImage); // Update the profile image state
      }
    });
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000); // Hide message after 2 seconds
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Profile Setup</Text>

      {/* Profile Picture Section */}
      <View style={styles.profileImageContainer}>
        <Image source={{ uri: profileImage }} style={styles.profileImage} />
        <TouchableOpacity style={styles.changePictureButton} onPress={handleImagePicker}>
          <Text style={styles.changePictureText}>Change Picture</Text>
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
      <TextInput style={styles.input} placeholder="Full Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Email Address" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Phone Number" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />
      <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} multiline />

      {/* Language Selection Dropdown */}
      <Text style={styles.label}>Preferred Language</Text>
      <View style={styles.pickerContainer}>
        <Picker selectedValue={language} onValueChange={(itemValue) => setLanguage(itemValue)} style={styles.picker}>
          <Picker.Item label="English" value="English" />
          <Picker.Item label="Hindi (हिन्दी)" value="Hindi" />
          <Picker.Item label="Spanish (Español)" value="Spanish" />
          <Picker.Item label="French (Français)" value="French" />
          <Picker.Item label="German (Deutsch)" value="German" />
          <Picker.Item label="Chinese (中文)" value="Chinese" />
          <Picker.Item label="Japanese (日本語)" value="Japanese" />
          <Picker.Item label="Russian (Русский)" value="Russian" />
          <Picker.Item label="Arabic (العربية)" value="Arabic" />
          <Picker.Item label="Portuguese (Português)" value="Portuguese" />
          <Picker.Item label="Italian (Italiano)" value="Italian" />
          <Picker.Item label="Korean (한국어)" value="Korean" />
          <Picker.Item label="Bengali (বাংলা)" value="Bengali" />
          <Picker.Item label="Telugu (తెలుగు)" value="Telugu" />
          <Picker.Item label="Tamil (தமிழ்)" value="Tamil" />
          <Picker.Item label="Urdu (اردو)" value="Urdu" />
          <Picker.Item label="Gujarati (ગુજરાતી)" value="Gujarati" />
          <Picker.Item label="Punjabi (ਪੰਜਾਬੀ)" value="Punjabi" />
        </Picker>
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Profile</Text>
      </TouchableOpacity>

      {/* Success Message */}
      {saved && <Text style={styles.savedMessage}>Profile saved successfully!</Text>}
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0077b6",
    marginBottom: 20,
  },
  profileImageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#ddd",
  },
  changePictureButton: {
    marginTop: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: "#0077b6",
    borderRadius: 8,
  },
  changePictureText: {
    color: "#fff",
    fontWeight: "bold",
  },
  input: {
    width: "90%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
    alignSelf: "flex-start",
    marginLeft: "5%",
    color: "#0077b6",
  },
  pickerContainer: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 2,
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: "100%",
  },
  saveButton: {
    width: "90%",
    backgroundColor: "#0077b6",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  savedMessage: {
    marginTop: 15,
    color: "green",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileSetup;
