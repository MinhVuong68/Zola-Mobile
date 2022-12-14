import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
  StatusBar,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";

export default function Welcome({ navigation }) {
  function logIn() {
    navigation.navigate("Login");
  }

  function signUp() {
    navigation.navigate("SignUp");
  }

  return (
    // <ScrollView>
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="rgb(220,220,220)" />
      <Text style={styles.zola}>Chào mừng bạn đã đến với Zola !!</Text>
      <Image
        source={require("../assets/Zola.png")}
        style={{ width: "100%", height: 300, marginBottom: 30 }}
      ></Image>

      <View>
        <TouchableOpacity style={styles.buttonSignIn} onPress={logIn}>
          <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
            ĐĂNG NHẬP
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSignUp} onPress={signUp}>
          <Text style={{ fontSize: 20, color: "black", fontWeight: "bold" }}>
            ĐĂNG KÝ
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    // </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "space-around",
  },
  zola: {
    // color: "#0091ff",
    // fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 30,
  },

  buttonSignIn: {
    paddingTop: 15,
    color: "white",
    alignItems: "center",
    backgroundColor: "#0091ff",
    height: 60,
    width: 300,
    fontSize: 25,
    borderColor: "#0091ff",
    marginBottom: 30,
    borderRadius: 100,
    alignSelf: "center",
  },
  buttonSignUp: {
    paddingTop: 15,
    color: "white",
    alignItems: "center",
    backgroundColor: "#f3f4f9",
    height: 60,
    width: 300,
    fontSize: 25,
    borderColor: "#f3f4f9",
    borderRadius: 100,
    alignSelf: "center",
    marginBottom: 20,
  },
});
