import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = ({inputField}) => {
  return <TextInput style={styles.input} value={inputField} />;
};

const styles = StyleSheet.create({
  input: {
    alignSelf: 'stretch',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Input;
