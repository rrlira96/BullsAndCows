import React from "react";
import {
  SafeAreaView,
  View,
  Button,
  Text,
  StyleSheet,
  Image,
} from "react-native";

const WinLose = ({ navigation, route }) => {
  const { win } = route.params;

  return (
    <SafeAreaView>
      {win ? (
        <View style={styles.container}>
          <Text style={styles.text}>You Win!!</Text>
          <Image
            style={styles.tinyLogo}
            source={require("../../../image/happyCow.png")}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.text}>You lose...</Text>
          <Image
            style={styles.tinyLogo}
            source={require("../../../image/sadBull.png")}
          />
        </View>
      )}
      <View style={styles.button}>
        <Button
          onPress={() => navigation.navigate("Start")}
          title="Play again"
          color="#841584"
          fontSize
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    paddingTop: 200,
    paddingBottom: 50,
    fontSize: 50,
    fontWeight: "bold",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingTop: 100,
  },
  tinyLogo: {
    paddingTop: 30,
    width: 200,
    height: 200,
  },
});

export default WinLose;
