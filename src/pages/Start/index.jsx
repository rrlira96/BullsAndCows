import React from "react";
import {
  SafeAreaView,
  View,
  Button,
  Text,
  StyleSheet,
  Image,
} from "react-native";

const StartScreen = ({ navigation }) => (
  <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.bAndC}>BULLS AND COWS</Text>
      <Image
        style={styles.tinyLogo}
        source={require("../../../image/cow.png")}
      />
      <Text style={styles.startText}>PRESS START!</Text>
    </View>
    <Button
      onPress={() => navigation.navigate("Game")}
      title="Start"
      color="#841584"
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  bAndC: {
    textAlign: "center",
    paddingTop: 200,
    paddingBottom: 50,
    fontSize: 30,
    fontWeight: "bold",
  },
  startText: {
    textAlign: "center",
    paddingTop: 50,
    paddingBottom: 50,
    fontSize: 20,
    fontWeight: "bold",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  tinyLogo: {
    paddingTop: 30,
    width: 300,
    height: 300,
  },
});

export default StartScreen;
