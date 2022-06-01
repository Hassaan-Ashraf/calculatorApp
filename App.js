import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import Buttons from './src/Button/Button';

import Input from './src/InputField/InputField';

const App = () => {
  const [operand1, setOperand1] = useState('');
  const [operand2, setOperand2] = useState('');
  const [operator, setOperator] = useState('');
  const [inputField, setInputField] = useState('');
  const button = [
    {
      title: '1',
    },
    {
      title: '2',
    },
    {title: '3'},
    {
      title: '4',
    },
    {
      title: '5',
    },
    {title: '6'},
    {
      title: '7',
    },
    {title: '8'},
    {
      title: '9',
    },
    {title: 'C'},
    {
      title: '0',
    },
    {title: '.'},
    {title: '+'},
    {
      title: '-',
    },
    {
      title: '*',
    },
    {title: '/'},
    {title: '='},
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Input inputField={inputField} />
      <View style={styles.buttonContainer}>
        {button.map((data, i) => (
          <Buttons
            key={i}
            digit={data.title}
            setOperand1={setOperand1}
            operand1={operand1}
            setOperand2={setOperand2}
            operand2={operand2}
            setOperator={setOperator}
            operator={operator}
            setInputField={setInputField}
            inputField={inputField}
          />
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});

export default App;
