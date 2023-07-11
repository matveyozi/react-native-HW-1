import {
	View,
	TextInput,
	Text,
	StyleSheet,
	Button,
} from 'react-native';

const RegistrationScreen = () => {
	return (
		<View style={styles.container}>
			<View>
			</View>
			<View style={styles.containerForm}>
				<Text style={styles.text}>RegistrationScreen</Text>
				<TextInput style={styles.input}
					placeholder="name"
					type='text'
				/>
				<TextInput
					style={styles.input}
					placeholder="email"
					keyboardType="email"
					type='email'
				/>
				<TextInput
					style={styles.input}
					placeholder="password"
					secureTextEntry={true}

				/>
				<Button title='See'></Button>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},

	text: {
		color: 'black',
		fontSize: 21,
		fontWeight: 'bold',
		textAlign: 'center',
		backgroundColor: 'rgba(75, 75, 75, .5)',
	},
	containerForm: {
		marginTop: 263,

		backgroundColor: 'white',
		borderTopLeftRadius: 20,
		borderTopRightRadius: 20,
		width: '100%'

	},
	input: {
		height: 60,
		margin: 12,
		borderWidth: 1,
		borderRadius: 8,
		padding: 16,
		color: '#BDBDBD',
		fontSize: 16,
		// fontWeight: 400,
		border: '0.50px #E8E8E8 solid',
	},
});

export default RegistrationScreen;
