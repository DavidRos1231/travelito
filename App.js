import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigation } from './src/navigation/AppNavigation';
import { initiFirebase } from './src/utils/firebase';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

export default function App() {
	return (
		<NavigationContainer>
			<AppNavigation />
		</NavigationContainer>
	);
}