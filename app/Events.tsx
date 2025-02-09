import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

// ✅ Define initial events before using them in useState
const initialEvents = [
  {
    id: "1",
    title: "Vignan Mahotsav 2025",
    date: "6 Feb - 8 Feb | 8:15 AM - 8:00 PM",
    location: "Guntur",
    price: "₹0.00",
    status: "Closed",
    image: "https://example.com/vignan-mahotsav.jpg",
  },
  {
    id: "2",
    title: "PRAMANA GITAM Hyderabad",
    date: "7 Feb - 9 Feb | 8:00 AM - 9:00 PM",
    location: "Hyderabad",
    price: "₹799.00",
    status: "Available",
    image: "https://example.com/pramana.jpg",
  },
];

const Events = () => {
  const [events, setEvents] = useState(initialEvents);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const loadMore = async () => {
    if (loading) return;
    setLoading(true);
    setTimeout(() => {
      const newEvents = [
        {
          id: (page * 2 + 1).toString(),
          title: `Event ${page * 2 + 1}`,
          date: "10 Feb - 12 Feb | 10:00 AM - 7:00 PM",
          location: "Bangalore",
          price: "₹499.00",
          status: "Available",
          image: "https://example.com/event3.jpg",
        },
        {
          id: (page * 2 + 2).toString(),
          title: `Event ${page * 2 + 2}`,
          date: "15 Feb - 17 Feb | 9:00 AM - 8:00 PM",
          location: "Chennai",
          price: "₹299.00",
          status: "Available",
          image: "https://example.com/event4.jpg",
        },
      ];
      setEvents([...events, ...newEvents]);
      setPage(page + 1);
      setLoading(false);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Top Trending Events</Text>
      <FlatList
        data={events}
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
              {item.status !== "Closed" && (
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Book Now</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading ? <ActivityIndicator size="large" color="red" /> : null}
      />
    </View>
  );
};

// ✅ Define the missing styles object here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 15,
    backgroundColor: "red",
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
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default Events;