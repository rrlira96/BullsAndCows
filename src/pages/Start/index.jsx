import React from "react";
import { SafeAreaView, Text, StyleSheet} from "react-native";

const StartScreen = ({ navigation }) => (
  <SafeAreaView>
    <View>
      <Text style={styles.bAndC}>BULLS AND COWS</Text>
      <Text>TO START THE GAME, ENTER THE ANSWER BELOW!</Text>
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
    paddingBottom: 200,
  },
});

export default StartScreen;
