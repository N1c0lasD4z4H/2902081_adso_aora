import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'; 
import { icons } from '../constants'; 

const FormField = ({ title, value, placeholder, handleChangeText, otherStyles, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[styles.container, otherStyles]}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === 'Password' && !showPassword}
          {...props} 
        />

        {title === 'Password' && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              style={styles.icon}
              resizeMode='contain'
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = {
  container: {
    marginBottom: 8, 
  },
  title: {
    fontSize: 16,
    color: '#e0e0e0', 
    fontWeight: '500', 
  },
  inputContainer: {
    width: '100%', 
    height: 64, 
    paddingHorizontal: 16, 
    backgroundColor: '#1E1E2D', 
    borderRadius: 24, 
    borderWidth: 2,
    borderColor: '#FF9001', 
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    color: '#ffffff', 
    fontSize: 16,
    fontWeight: '600', 
  },
  icon: {
    width: 24,
    height: 24,
  },
};

export default FormField;
