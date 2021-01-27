
import React, { useState } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const CafeCard = ({ onPress, title, backgroundColor }) => (
    <TouchableOpacity
		onPress={onPress}
		style={[
			styles.appButtonContainer,
			backgroundColor && { backgroundColor }
		]}>
		<Text style={styles.appButtonText}>
			{title}
		</Text>
	</TouchableOpacity>
);

export default CafeCard;

const styles = StyleSheet.create({
    appButtonContainer: {
        height: 64,
        marginTop: 8,
        marginLeft: 10,
        marginRight: 10,
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
}) 