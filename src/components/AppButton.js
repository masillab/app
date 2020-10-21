import React from 'react';
import {
	TouchableOpacity,
	Text,
	StyleSheet,
} from 'react-native';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

const AppButton = ({ onPress, title, size, margin, backgroundColor, fontColor }) => (
	<TouchableOpacity
		onPress={onPress}
		style={[
			styles.appButtonContainer,
			size === "sm" && {
				paddingHorizontal: 8,
				paddingVertical: 6,
				elevation: 6
			},
			backgroundColor && { backgroundColor },
			margin && {marginLeft: margin, marginRight: margin}
		]}
	>
		<Text style={[styles.appButtonText, 
					size === "sm" && { fontSize: 14 },
					fontColor && {color: fontColor}]}>
			{title}
		</Text>
	</TouchableOpacity>
);

export default AppButton;

const styles = StyleSheet.create({
	appButtonContainer: {
		height: 36,
		marginTop: 8,
		marginLeft: 0,
		marginRight: 0,
		marginBottom: 8,
		elevation: 8,
		backgroundColor: "#009688",
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 12
	},
	appButtonText: {
		fontSize: 32,
		color: "#fff",
		fontWeight: "bold",
		alignSelf: "center",
		textTransform: "uppercase"
	},
	button: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 10,
		borderRadius: 5,
	},
	title: {
		fontSize: 15,
	},
});