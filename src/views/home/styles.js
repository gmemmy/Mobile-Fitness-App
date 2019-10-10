import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	upperHalf: {
		flex: 0.5,
		backgroundColor: '#7243fe',
		borderBottomRightRadius: 50,
		borderBottomLeftRadius: 50,
	},
	title: {
		color: '#ffff',
		fontSize: 40
	},
	lowerHalf: {
		flex: 0.5,
	},
	alignElements: {
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default styles;