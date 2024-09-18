import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

const CustomButton = ({ title = 'Continue with email', handlePress, containerStyles, textStyles, isLoading }) => {
  return (
    <TouchableOpacity 
      onPress={handlePress}
      activeOpacity={0.7}
      style={[styles.button, containerStyles]}
      disabled={isLoading} 
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={[styles.buttonText, textStyles]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FF9001', 
    borderRadius: 12,
    minHeight: 62, 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingHorizontal: 16, 
  },
  buttonText: {
    color: '#161622', 
    fontSize: 16, 
    fontWeight: 'bold', 
  },
});

export default CustomButton;