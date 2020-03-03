import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles'

export default function App() {
  const [disp, setDisp] = useState({
    display: 'Display',
    result: 'Result'
  })

  const col1Buttons = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    [',', '0', '=']
  ]
  const col2Buttons = ['C', '÷', 'x', '-', '+']

  const handleChange = digit => {
    if (digit === 'C'){
      setDisp({
        display: '',
        result: ''
      })
    } else if (digit === '=') {
      setDisp({
        display: disp.result,
        result: ''
      })
    } else {
      const display = disp.display + digit
      let result = disp.result
      try{
        let fixedOperation = display.split('x').join('*')
        fixedOperation = fixedOperation.split('÷').join('/')
        fixedOperation = fixedOperation.split(',').join('.')
        result = new String(eval(fixedOperation)).toString()
      }catch(err){}

      setDisp({
        display,
        result
      })
    }  
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
                <TouchableOpacity key={digit} style={styles.btn} onPress={() => handleChange(digit)}><Text style={styles.btnText}>{digit}</Text></TouchableOpacity>)}
              </View>
              )
          } 
        </View>
        <View style={styles.col2}>
          {
            col2Buttons.map(digit => 
              <TouchableOpacity key={digit} style={styles.btn} onPress={() => handleChange(digit)}>
                <Text style={styles.btnText}>{digit}</Text>
              </TouchableOpacity>)
          }
        </View>
      </View>
    </View>
  );
}
