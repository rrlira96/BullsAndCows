import React from "react";
import { useEffect } from "react";
import {
  StyleSheet,
  Text,
  Button,
  FlatList,
  TextInput,
  View,
  Alert,
} from "react-native";

const GenerateResponse = () => {
  let randomNumber = Math.floor(Math.random() * 9999).toString();
  return ("0000" + randomNumber).slice(-4);
};

const Game = ({ navigation }) => {
  const [guess, onChangeGuess] = React.useState("");
  const [response, setResponse] = React.useState("");
  const [guessList, setGuessList] = React.useState([]);

  useEffect(() => {
    setResponse(GenerateResponse());
  }, []);

  useEffect(() => {
    checkWinner();
  }, [guessList]);

  const checkWinner = () => {
    let lastGuess = guessList[guessList.length - 1];
    if (lastGuess != undefined) {
      if (lastGuess.bullsAndCows == "4B 0C") {
        navigation.navigate("WinLose", {
          win: true,
        });
      }
      if (lastGuess.count == 8) {
        navigation.navigate("WinLose", {
          win: false,
        });
      }
      if (lastGuess.count == 7) {
        Alert.alert("This is your last chance...");
      }
    }
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
      <Text style={styles.item}># {props.count} </Text>
      <Text style={styles.item}> {props.guess} </Text>
      <Text style={styles.item}> {props.bullsAndCows} </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputButton}>
        <TextInput
          style={styles.input}
          onChangeText={(value) => onChangeGuess(value)}
          value={guess}
          placeholder="Enter your guess"
          keyboardType="numeric"
          maxLength={4}
        />
        <Button onPress={addGuess} title="Guess" color="#841584" />
      </View>

      <FlatList
        horizontal={false}
        data={guessList}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item) => item.count.toString()}
        ListHeaderComponent={listHeader()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  inputButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 25,
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
    fontSize: 23,
    fontWeight: "bold",
  },
  item: {
    textAlign: "center",
    fontSize: 20,
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
});

export default Game;
