import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, GestureHandlerRootView } from 'react-native-gesture-handler';
import { images } from '../constants';
import CustomButton from '../components/CustomButtom';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.innerContainer}>
              <Image
                source={images.logo}
                style={styles.logo}
                resizeMode="contain"
              />
              <Image
                source={images.cards}
                style={styles.cardImage}
                resizeMode="contain"
              />
              <View style={styles.textContainer}>
                <Text style={styles.headerText}>
                  Discover Endless{"\n"}
                  Possibilities with{" "}
                  <Text style={styles.secondaryText}>Aora</Text>
                </Text>
                <Image
                  source={images.path}
                  style={styles.pathImage}
                  resizeMode="contain"
                />
                <Text style={styles.descriptionText}>
                  Where Creativity Meets Innovation: Embark on a Journey of Limitless
                  Exploration with Aora
                </Text>

                <CustomButton
                  title="Continue with Email"
                  handlePress={() => router.push("/sign-in")}
                  containerStyles={styles.button}
                />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161622', // Aquí se aplica tu color primario
  },
  scrollView: {
    flexGrow: 1,
  },
  innerContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 16,
  },
  logo: {
    width: 130,
    height: 84,
  },
  cardImage: {
    maxWidth: 380,
    width: '100%',
    height: 300,
  },
  textContainer: {
    position: 'relative',
    marginTop: 20,
  },
  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  secondaryText: {
    color: 'secondary-200',
  },
  pathImage: {
    width: 136,
    height: 15,
    position: 'absolute',
    bottom: -8,
    right: -8,
  },
  descriptionText: {
    fontSize: 14,
    fontFamily: 'pregular',
    color: 'gray-100',
    marginTop: 20,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    marginTop: 20,
  },
});