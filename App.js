import { View, StyleSheet, ImageBackground } from 'react-native';
import RegistrationScreen from './src/components/RegistrationScreen/RegistrationScreen';
// import LoginScreen from './src/components/LoginScreen/LoginScreen'
export default function App() {
  const image = require('./src/img/mainBg.jpg');
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={image}> 
        <RegistrationScreen />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  image: {
    width: '100%',
    // flex: 1,
    justifyContent: 'center',
  },
});