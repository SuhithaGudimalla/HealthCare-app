import React from "react";
import { useRouter } from "expo-router";
import { Linking } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

// Function to open Google Maps with a given location
const openGoogleMaps = (location) => {
  const query = encodeURIComponent(location);
  const url = `https://www.google.com/maps/search/?api=1&query=${query}`;
  Linking.canOpenURL(url)
    .then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        alert("Google Maps cannot be opened on this device.");
      }
    })
    .catch((err) => {
      console.error("Failed to open Google Maps", err);
      alert("Could not open Google Maps. Please check your device settings.");
    });
};

const Home = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerLogo}>HealthHive</Text>
        <TouchableOpacity>
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/search.png" }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <View style={styles.coinContainer}>
          <Text style={styles.coinText}></Text>
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/coin.png" }}
            style={styles.iconSmall}
          />
        </View>
      </View>

      <ScrollView>
        {/* Profile Completion Card */}
        <View style={styles.profileCard}>
          <Text style={styles.profileTitle}>Suhitha</Text>
          <Text style={styles.profileSubText}>
            Please complete your profile to get access to all the events,
            internships, communities, and more.
          </Text>
          <View style={styles.progressContainer}>
            <Text style={styles.progressText}>25%</Text>
            <View style={styles.progressCircle} />
          </View>
          <TouchableOpacity
            style={styles.completeProfileButton}
            onPress={() => router.push("/ProfileSetup")}  // Navigate to Profile Setup page
            >
            <Text style={styles.completeProfileButtonText}>
                Complete Your Profile
            </Text>
        </TouchableOpacity>
        </View>

        {/* Upcoming Events */}
        <Text style={styles.sectionTitle}>Upcoming Events</Text>

        {/* Event Cards */}
        <View style={styles.eventCard}>
          <Image
            source={{
              uri: "https://cdn.expresshealthcare.in/wp-content/uploads/2020/01/03174832/Medical-camp-750x409.jpg",
            }}
            style={styles.eventImage}
          />
          <Text style={styles.eventTitle}>Dengue Health Camp</Text>
          <Text style={styles.eventSubText}>
            People are welcome to visit this health camp to undergo dengue
            testing and receive essential information on preventive measures.
          </Text>
          <Text style={styles.eventDate}>11 Feb | 1:00 PM - 6:30 PM</Text>
          <Text style={styles.eventLocation}>📍 Nizamabad</Text>
          <TouchableOpacity
            style={styles.bookButton}
            onPress={() => openGoogleMaps("Nizamabad")}
          >
            <Text style={styles.bookButtonText}>See Location</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.eventCard}>
          <Image
            source={{
              uri: "https://www.un.org/sites/un2.un.org/files/field/image/1583952355.1997.jpg",
            }}
            style={styles.eventImage}
          />
          <Text style={styles.eventTitle}>COVID-19 Vaccine Drive</Text>
          <Text style={styles.eventSubText}>
            Individuals can visit this vaccine drive to receive their COVID-19
            vaccination and gain important information on safety measures and
            post-vaccination care.
          </Text>
          <Text style={styles.eventDate}>21 Feb | 8:30 AM - 5:30 PM</Text>
          <Text style={styles.eventLocation}>📍 Warangal</Text>
          <TouchableOpacity
            style={styles.bookButton}
            onPress={() => openGoogleMaps("Warangal")}
          >
            <Text style={styles.bookButtonText}>See Location</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.eventCard}>
          <Image
            source={{
              uri: "https://img.freepik.com/free-photo/doctor-measuring-blood-pressure-patient_53876-42352.jpg",
            }}
            style={styles.eventImage}
          />
          <Text style={styles.eventTitle}>BP Check-Up Camp</Text>
          <Text style={styles.eventSubText}>
            Free blood pressure check-ups to help individuals monitor their
            health and receive guidance on maintaining normal BP levels.
          </Text>
          <Text style={styles.eventDate}>15 Feb | 10:00 AM - 4:00 PM</Text>
          <Text style={styles.eventLocation}>📍 Secunderabad</Text>
          <TouchableOpacity
            style={styles.bookButton}
            onPress={() => openGoogleMaps("Secunderabad")}
          >
            <Text style={styles.bookButtonText}>See Location</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.eventCard}>
          <Image
            source={{
              uri: "https://img.freepik.com/free-photo/dentist-examines-patient-s-teeth_1157-20278.jpg",
            }}
            style={styles.eventImage}
          />
          <Text style={styles.eventTitle}>Dental Check-Up Camp</Text>
          <Text style={styles.eventSubText}>
            Visit our dental camp for free oral health check-ups and tips on
            maintaining healthy teeth and gums.
          </Text>
          <Text style={styles.eventDate}>18 Feb | 9:00 AM - 3:00 PM</Text>
          <Text style={styles.eventLocation}>📍 Vijayawada</Text>
          <TouchableOpacity
            style={styles.bookButton}
            onPress={() => openGoogleMaps("Vijayawada")}
          >
            <Text style={styles.bookButtonText}>See Location</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.eventCard}>
          <Image
            source={{
              uri: "https://img.freepik.com/free-photo/ophthalmologist-checking-patient-s-eyes-clinic_23-2148772383.jpg",
            }}
            style={styles.eventImage}
          />
          <Text style={styles.eventTitle}>Eye Check-Up Camp</Text>
          <Text style={styles.eventSubText}>
            Get your vision checked and learn about eye health in our free eye
            check-up camp.
          </Text>
          <Text style={styles.eventDate}>20 Feb | 11:00 AM - 5:00 PM</Text>
          <Text style={styles.eventLocation}>📍 Vizag</Text>
          <TouchableOpacity
            style={styles.bookButton}
            onPress={() => openGoogleMaps("Vizag")}
          >
            <Text style={styles.bookButtonText}>See Location</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navText}>SymptCheck</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/Events")}>
          <Text style={styles.navText}>Events</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navText}>More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#d8b384",
  },
  headerLogo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: "black",
  },
  iconSmall: {
    width: 15,
    height: 15,
    marginLeft: 5,
  },
  coinContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  coinText: {
    color: "black",
    fontWeight: "bold",
  },
  profileCard: {
    backgroundColor: "#f5e6d0",
    padding: 12,
    margin: 12,
    borderRadius: 10,
    alignItems: "center",
    elevation: 3,
  },
  profileTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  profileSubText: {
    color: "black",
    marginVertical: 6,
    textAlign: "center",
    fontSize: 14,
  },
  progressContainer: {
    alignItems: "center",
    marginTop: 8,
  },
  progressText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  progressCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#d8b384",
    marginVertical: 8,
  },
  completeProfileButton: {
    backgroundColor: "#d8b384",
    padding: 8,
    borderRadius: 6,
    marginTop: 8,
  },
  completeProfileButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 16,
    color: "black",
  },
  eventCard: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    elevation: 4,
  },

  eventImage: {
    width: "100%",
    height: 150,
    borderRadius: 12,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
    color: "black",
  },
  eventSubText: {
    color: "black",
    marginVertical: 4,
  },
  eventDate: {
    fontWeight: "bold",
    marginVertical: 4,
    color: "black",
  },
  eventLocation: {
    color: "black",
    marginVertical: 4,
  },
  bookButton: {
    backgroundColor: "#d8b384",
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 8,
    alignItems: "center",
  },
  bookButtonText: {
    color: "black",
    fontWeight: "bold",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#f5e6d0",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  navText: {
    fontWeight: "bold",
    color: "black",
  },
});

export default Home;
