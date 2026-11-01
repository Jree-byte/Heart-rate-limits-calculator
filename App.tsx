import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
    const [age, setAge] = useState<string>("")
    const ageAsNumber: number = !isNaN(Number(age)) === true ? Number(age) :0
    const lower: number = (220 - ageAsNumber) * 0.65
    const upper: number = (220 - ageAsNumber) * 0.85
 
 
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart rate limits calculator</Text>
      <Text style={styles.text}>Enter your age: </Text>
      <TextInput
        placeholder="age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
        style={{
        borderWidth: 1,
        width: 70,
        height: 40,
        borderColor: "black",
        borderRadius: 5,
        padding: 5,
    }}
    />
    <Text> Lower limit: {lower.toFixed(2)} bpm</Text>
    <Text> Upper limit: {upper.toFixed(2)} bpm</Text>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
backgroundColor: '#f6f7f6',
flex: 1,
margin: 16
},
heading: {
fontSize: 24,
marginTop: 32,
marginBottom: 16
},
text: {
marginVertical: 16
}
});

