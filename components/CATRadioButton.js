import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';

const RadioButton = ({ value, selectedValue, onSelect }) => {
  return (
    <TouchableOpacity onPress={() => onSelect(value)}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon
          name={selectedValue === value ? 'radio-button-checked' : 'radio-button-unchecked'}
          size={24}
          color={selectedValue === value ? '#2196F3' : '#757575'}
        />
        <Text style={{ marginLeft: 8 }}>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const MyComponent = () => {
  const [selectedValue, setSelectedValue] = useState('Option 1');

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  return (
    <View style={styles.RadioButton}>
      <Text style={StyleSheet.RadioButtonDetails}>I certify that I am at least 18 Years of age, and I aggre to
      TERMS & CONDITION, Privacy Policy, Legal Disclaimer and CryptoCurrency Loan Aggrement</Text>
      <RadioButton value="" selectedValue={selectedValue} onSelect={handleSelect} />
    </View>
  );
};

const styles=StyleSheet.create({
  RadioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  RadioButtonDetails: {
  }
})

export default MyComponent;