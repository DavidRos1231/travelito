import { StyleSheet, Text, View } from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const RegisterForm = () => {
	return (
		<KeyboardAwareScrollView>
			<Input placeholder='Correo Electronico' containerStyle={styles.Input}
				rightIcon={<Icon type="material-community" name="at" iconStyle={styles.icon} />} />
			<Input placeholder='Password' containerStyle={styles.Input}
				rightIcon={<Icon type="material-community" name="eye-outline" />} />
			<Input placeholder='Repetir Password' containerStyle={styles.Input}
				rightIcon={<Icon type="material-community" name="eye-outline" />} />
			<Button title='Registrar' containerStyle={styles.btn} />
		</KeyboardAwareScrollView>
	);
};

const styles = StyleSheet.create({
	Input: {
		width: '100%',
		marginTop: 20,
	},
	icon: {
		color: '#c1c1c1',
	},
	btn: {
		backgroundColor: '#00a680',
	}
});
