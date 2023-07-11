import {
  View,
  TextInput,
  Text,
  StyleSheet,
} from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>LoginScreen</Text>
        <View style={styles.containerForm}>
          <TextInput style={styles.input} placeholder="name" />
          <TextInput
            style={styles.input}
            placeholder="email"
            keyboardType="email"
          />
          <TextInput
            style={styles.input}
            placeholder="password"
            secureTextEntry
          />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  
  text: {
    // color: 'white',
    // fontSize: 21,
    // fontWeight: 'bold',
    // textAlign: 'center',
    // backgroundColor: 'rgba(75, 75, 75, .5)',
  },
  containerForm: {
    // marginTop: 50,
    // backgroundColor: 'white',
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
  },
  input: {
    // height: 40,
    // margin: 12,
    // borderWidth: 1,
    // borderRadius: 8,
    // padding: 16,
    // color: '#BDBDBD',
    // fontSize: 16,
    // fontWeight: 400,
    // border: "0.50px #E8E8E8 solid",
  },
});

export default LoginScreen;
