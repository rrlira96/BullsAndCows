import { React, useEffect } from "react";

import {
  StyleSheet,
  Text,
  Button,
  ScrollView,
  FlatList,
  TextInput,
  View,
  SafeAreaView,
  StatusBar
} from "react-native";

const GenerateResponse = () => {
  let randomNumber = Math.floor(Math.random() * 9999).toString;
  return ("0000" + randomNumber).slice(-4);
};

const Game = ({ navigation }) => {
  const [guess, onChangeGuess] = React.useState("");
  const [response, setResponse] = React.useState("");
  const [isResponded, setIsResponded] = React.useState(false);
  const [guessList, setGuessList] = React.useState([]);

  useEffect(() => {
    GenerateResponse;
  });

  <View style={{}}>
    <View style={styles.inputButton}>
      <TextInput
        style={styles.input}
        onChangeText={(value) => onChangeGuess(value)}
        value={guess}
        placeholder="Enter your guess"
        keyboardType="numeric"
        maxLength={4}
      />
      <Button onPress={addGuess} title="OK" color="#841584" />
    </View>
    <ScrollView style={styles.scrollView}>
      <FlatList
        data={guessList}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item.count.toString()}
        ListHeaderComponent={listHeader()}
        numColumns={3}
      />
    </ScrollView>
  </View>;
};

const addGuess = () => {
  if (guess.length > 0) {
    setGuessList([
      ...guessList,
      {
        guess: guess,
        bullsAndCows: bullsAndCows(guess),
        count: guessList.length + 1,
      },
    ]);
    onChangeGuess("");
  }
};

const addResponse = () => {
  if (response.length > 0) {
    setGuessList([
      ...guessList,
      {
        guess: guess,
        bullsAndCows: bullsAndCows(guess),
        count: guessList.length + 1,
      },
    ]);
    onChangeGuess("");
  }
};

const bullsAndCows = (num) => {
  let cows = 0;
  let bulls = 0;
  for (let i = 0; i < num.length; i++) {
    if (response.includes(num[i])) {
      if (response[i] == num[i]) {
        bulls++;
      } else {
        cows++;
      }
    }
  }
  return bulls + "B " + cows + "C";
};

const listHeader = () => (
  <View style={{ flexDirection: "row", marginVertical: 15 }}>
    <Text style={styles.headerText}>TRY</Text>
    <Text style={styles.headerText}>GUESS</Text>
    <Text style={styles.headerText}>RESULT</Text>
  </View>
);

const renderItem = (props) => (
  <View style={{ flexDirection: "row" }}>
    <Text style={styles.headerText}>#{props.count}. </Text>
    <Text style={styles.headerText}> {props.guess} </Text>
    <Text style={styles.headerText}> {props.bullsAndCows} </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: StatusBar.currentHeight,
  },
  inputButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  bAndC: {
    textAlign: "center",
    paddingBottom: 200,
  },
  input: {
    flexDirection: "column",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  headerText: {
    paddingHorizontal: 40,
  },
  scrollView: {
    paddingHorizontal: 40,
  },
});

export default Game;
