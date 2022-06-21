import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import {spacing} from '../utils/sizes';

export const Focus = (props) => {
  const [subject, setSubject] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          label="What would like to focus on?"
          onChangeText={setSubject}
          style={styles.textInput} mode="flat"></TextInput>
        <View style={styles.button}>
          <RoundedButton title="+" size={50} onPress={()=>{props.addSubject(subject)}}></RoundedButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 0.2,
  },

  button: {
    justifyContent: 'center',
  },

  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },

  inputContainer: {
    flexDirection: 'row',
    padding: spacing.lg,
  },
});
