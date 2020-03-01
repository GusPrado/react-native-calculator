import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [disp, setDisp] = useState({
    display: '1',
    result: '2'
  })

  const col1Buttons = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    [',', '0', '=']
  ]
  const col2Buttons = ['C', '÷', 'x', '-', '+']

  const handleOp = (op) => {
    console.log()
  }

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{disp.display}</Text>
      <Text style={styles.result}>{disp.result}</Text>
      <View style={styles.buttons}>
        <View style={styles.col1}>
          {
            col1Buttons.map((line, index) => 
              <View key={index} style={styles.line}>
                { line.map(digit => 
                <TouchableOpacity key={digit} style={styles.btn} onPress={() => handleOp(op)}><Text style={styles.btnText}>{digit}</Text></TouchableOpacity>)}
              </View>
              )
          } 
        </View>
        <View style={styles.col2}>
          {
            col2Buttons.map(digit => 
              <TouchableOpacity key={digit} style={styles.btn} onPress={() => handleOp(op)}>
                <Text style={styles.btnText}>{digit}</Text>
              </TouchableOpacity>)
          }
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  display:{
    flex: 1,
    backgroundColor: '#efefef',
    fontSize: 80,
    textAlign: 'right',
    paddingTop: 30,
    paddingRight: 10
  },
  result:{
    flex: 0.4,
    backgroundColor: '#efefef',
    fontSize: 40,
    textAlign: 'right',
    paddingTop: 10,
    paddingRight: 10
  },
  buttons:{
    flex: 5,
    flexDirection: 'row'
  },
  col1: {
    flex: 3,
    backgroundColor: '#000'
  },
  line:{
    flex: 1,
    flexDirection: 'row'
  },
  btn:{
    flex: 1,
    justifyContent: 'center'
  },
  btnText:{
    textAlign: 'center',
    fontSize: 50,
    color: '#fff'
  },
  col2: {
    flex: 1,
    backgroundColor: '#0b0b0b'
  }
});
