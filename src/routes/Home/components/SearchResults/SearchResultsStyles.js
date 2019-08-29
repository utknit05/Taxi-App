import { Dimensions } from 'react-native';

var width = Dimensions.get('window').width;

const styles = {
	searchResultsWrapper: {
		top: 220,
		position: 'absolute',
		width: width,
		height: 1000,
		backgroundColor: '#fff',
		opacity: 0.9
	},
	primaryText: {
		fontWeight: 'bold',
		color: '#373737',
	},
	secondaryText: {
		fontStyle: 'italic',
		color: '#7D7D7D'
	},
	leftContainer: {
		paddingTop: 0,
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		borderLeftColor: '#7D7D7D'
	},
	leftIcon: {
		paddingTop: 15,
		fontSize: 20,
		color: '#7D7D7D'
	},
	distance: {
		fontSize:12
	}
};

export default styles;