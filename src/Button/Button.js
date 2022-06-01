import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Buttons = ({
  digit,
  setOperand1,
  operand1,
  setOperand2,
  operand2,
  setOperator,
  operator,
  inputField,
  setInputField,
}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      key={digit}
      onPress={e => {
        if (digit === 'C') {
          setOperand1('');
          setOperand2('');
          setOperator('');
          setInputField('C');
          return;
        } else if (
          digit === '+' ||
          digit === '-' ||
          digit === '*' ||
          digit === '/'
        ) {
          setOperator(digit);
          setInputField(digit);
          return;
        } else if (digit === '=') {
          let ans = 0;
          if (operator === '+') {
            ans = Number(operand1) + Number(operand2);
            setInputField(String(ans));
          } else if (operator === '-') {
            ans = Number(operand1) - Number(operand2);
            setInputField(String(ans));
          } else if (operator === '*') {
            ans = Number(operand1) * Number(operand2);
            setInputField(String(ans));
          } else if (operator === '/') {
            ans = Number(operand1) / Number(operand2);
            setInputField(String(ans));
          }
          setOperand1(String(ans));
          setOperand2('');
          setOperator('');
          return;
        }
        if (operand1 !== '' && operator !== '') {
          setOperand2(operand2 + digit);
          setInputField(operand2 + digit);
          return;
        } else {
          setOperand1(operand1 + digit);
          setInputField(operand1 + digit);
          return;
        }
      }}>
      <Text>{digit}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 50,
    backgroundColor: 'steelblue',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Buttons;
