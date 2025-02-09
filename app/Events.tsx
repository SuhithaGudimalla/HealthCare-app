import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ActivityIndicator, Linking } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

// ✅ Initial health camps list with village images
const initialCamps = [
  {
    id: "1",
    title: "Free Health Camp - Pedakakani",
    date: "10 Feb | 9:00 AM - 4:00 PM",
    location: "Pedakakani, Andhra Pradesh",
    price: "Free",
    status: "Ongoing",
    image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Pedakakani_Village.jpg",
  },
  {
    id: "2",
    title: "General Checkup Camp - Narsapur",
    date: "15 Feb | 8:30 AM - 5:00 PM",
    location: "Narsapur, Telangana",
    price: "Free",
    status: "Upcoming",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Narsapur_Village_View.jpg",
  },
];

// ✅ Function to open location in Google Maps
const openGoogleMaps = (location) => {
  const query = encodeURIComponent(location);
  const url = `https://www.google.com/maps/search/?api=1&query=${query}`;
  Linking.openURL(url);
};

const HealthCamps = () => {
  const [camps, setCamps] = useState(initialCamps);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  // ✅ Corrected loadMore function with village images
  const loadMore = async () => {
    if (loading) return;
    setLoading(true);

    setTimeout(() => {
      const newCamps = [
        {
          id: (page * 2 + 1).toString(),
          title: "Health Checkup - Rampur",
          date: "20 Feb | 10:00 AM - 3:00 PM",
          location: "Rampur, Uttar Pradesh",
          price: "Free",
          status: "Upcoming",
          image: "https://upload.wikimedia.org/wikipedia/commons/6/60/Rampur_Village.jpg",
        },
        {
          id: (page * 2 + 2).toString(),
          title: "Medical Awareness Camp - Cheyyur",
          date: "25 Feb | 9:30 AM - 4:30 PM",
          location: "Cheyyur, Tamil Nadu",
          price: "Free",
          status: "Upcoming",
          image: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Cheyyur_Village.jpg",
        },
      ];
      setCamps((prevCamps) => [...prevCamps, ...newCamps]); // ✅ Functional update
      setPage(page + 1);
      setLoading(false);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Upcoming Health Camps</Text>
      <FlatList
        data={camps}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.date}>
                <FontAwesome5 name="calendar-alt" /> {item.date}
              </Text>
              <Text style={styles.location}>
                <FontAwesome5 name="map-marker-alt" /> {item.location}
              </Text>
              <Text style={styles.price}>{item.price}</Text>

              {/* ✅ "See Location" Button Instead of Register */}
              <TouchableOpacity style={styles.button} onPress={() => openGoogleMaps(item.location)}>
                <Text style={styles.buttonText}>See Location</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <ActivityIndicator size="large" color="#0077b6" /> : null}
      />
    </View>
  );
};

// ✅ Updated Styles with New Theme Color #0077b6
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 15,
    backgroundColor: "#0077b6",
    color: "#fff",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 150,
  },
  details: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  date: {
    fontSize: 14,
    color: "gray",
    marginVertical: 2,
  },
  location: {
    fontSize: 14,
    color: "gray",
    marginVertical: 2,
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  button: {
    marginTop: 10,
    backgroundColor: "#0077b6",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default HealthCamps;

