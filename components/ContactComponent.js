import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-elements";

export default function Contact() {
  return (
    <View>
      <Card>
        <Card.Title>Contact Information</Card.Title>
        <Card.Divider />
        <Text style={styles.addressText}>121, Clear Water Bay Road</Text>
        <Text style={styles.addressText}>Clear Water Bay, Kowloon</Text>
        <Text style={styles.addressText}>HONG KONG</Text>
        <Text style={styles.addressText}>Tel: +852 1234 5678</Text>
        <Text style={styles.addressText}>Fax: +852 8765 4321</Text>
        <Text style={{fontWeight: "bold"}}>Email:confusion@food.net</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  addressText:{
    fontWeight: "bold",
    marginBottom: 20
  }
})