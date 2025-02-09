import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter(); // Use the router hook

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerLogo}>st.</Text>
        <TouchableOpacity>
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/search.png" }}
            style={styles.icon}
          />
        </TouchableOpacity>
        <View style={styles.coinContainer}>
          <Text style={styles.coinText}>65</Text>
          <Image
            source={{ uri: "https://img.icons8.com/ios-filled/50/coin.png" }}
            style={styles.iconSmall}
          />
        </View>
      </View>

      {/* Profile Completion Card */}
      <View style={styles.profileCard}>
        <Text style={styles.profileTitle}>Suhitha</Text>
        <Text style={styles.profileSubText}>
          Please complete your profile to get access to all the events,
          internships, communities and more.
        </Text>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>25%</Text>
          <View style={styles.progressCircle} />
        </View>
        <TouchableOpacity style={styles.completeProfileButton}>
          <Text style={styles.completeProfileButtonText}>
            Complete Your Profile
          </Text>
        </TouchableOpacity>
      </View>

      {/* Upcoming Events */}
      <ScrollView>
        <Text style={styles.sectionTitle}>Upcoming Events</Text>
        <View style={styles.eventCard}>
          <Image
            source={{ uri: "https://via.placeholder.com/300x150" }}
            style={styles.eventImage}
          />
          <Text style={styles.eventTitle}>
            Fundamentals of AR/VR - E-Certification
          </Text>
          <Text style={styles.eventSubText}>
            Dive into the fascinating world of Virtual Reality (VR) & Augmented
            Reality (AR)
          </Text>
          <Text style={styles.eventDate}>11 Feb | 7:00 PM - 8:30 PM</Text>
          <Text style={styles.eventLocation}>Hyderabad</Text>
          <TouchableOpacity
            style={styles.bookButton}
            onPress={() => router.push("/Events")} // Navigate to Events page
          >
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/Events")}>
          <Text style={styles.navText}>Events</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navText}>Internships</Text>
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
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#d71920",
  },
  headerLogo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: "#fff",
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
    color: "#fff",
    fontWeight: "bold",
  },
  profileCard: {
    backgroundColor: "#d71920",
    padding: 16,
    margin: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  profileTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  profileSubText: {
    color: "#fff",
    marginVertical: 8,
    textAlign: "center",
  },
  progressContainer: {
    alignItems: "center",
    marginTop: 8,
  },
  progressText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  progressCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#ffbaba",
    marginVertical: 8,
  },
  completeProfileButton: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginTop: 8,
  },
  completeProfileButtonText: {
    color: "#d71920",
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 16,
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
  },
  eventSubText: {
    color: "gray",
    marginVertical: 4,
  },
  eventDate: {
    fontWeight: "bold",
    marginVertical: 4,
  },
  eventLocation: {
    color: "gray",
    marginVertical: 4,
  },
  bookButton: {
    backgroundColor: "#d71920",
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 8,
    alignItems: "center",
  },
  bookButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: "#ddd",
  },
  navText: {
    fontWeight: "bold",
    color: "#d71920",
  },
});

export default Home;
