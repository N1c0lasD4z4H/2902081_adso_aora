import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet, ScrollView, Alert, Image } from 'react-native'; 
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../../components/FormField'; 

import { images } from '../../constants'; 

import CustomButton from '../../components/CustomButtom'; 
import { getCurrentUser, signIn } from '../../lib/appwrite';


const SignIn = () => {
  const [form, setForm] = useState({
    email:'',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert('Error', 'Please fill in all the fields');
      return; 
    }
    
    setIsSubmitting(true);
    try {
       await signIn(form.email, form.password);
       const result = await getCurrentUser(); 
       setUser(result);
       setIsLogged(true);

       Alert.alert("Succes", "User signed in successfully");
      // Set it to Global State...
      router.replace('/home');
    } catch (error) {
      Alert.alert('Error', error.message);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image source={images.logo} resizeMode='contain' style={styles.logo} />
        <Text style={styles.title}>Login to Aora</Text>
        <FormField
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles={styles.formField}
          keyboardType="email-address"
        />

        <FormField
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, password: e })}
          otherStyles={styles.formField}
        />
        <CustomButton
          title="Sign in"
          handlePress={submit}
          containerStyles={styles.buttonContainer}
          isLoading={isSubmitting}
        />

        

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have account?</Text>
          <Link href="/sign-up" style={styles.link}>Sign Up</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161622',
    flex: 1,
  },
  scrollViewContent: {
    justifyContent: 'center',
    minHeight: '85%',
    paddingHorizontal: 16,
    marginVertical: 24,
  },
  logo: {
    width: 115,
    height: 35,
  },
  title: {
    fontSize: 24,
    color: 'white',
    fontWeight: '600',
    marginTop: 20,
  },
  formField: {
    marginTop: 28,
  },
  buttonContainer: {
    marginTop: 28,
  },
  footer: {
    justifyContent: 'center',
    paddingTop: 20,
    flexDirection: 'row',
    gap: 8,
  },
  footerText: {
    fontSize: 18,
    color: 'white',
  },
  link: {
    fontSize: 18,
    fontWeight: '600',
    color: 'orange', 
  },
});

export default SignIn;
