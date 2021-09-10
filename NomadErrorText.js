import React from 'react';
import { View, Text, Input, Stylesheet } from 'react-native';


export default function ErrorText({ label, placeholder, value, onChange }) {
    return (<View style={styles.container}>
                <Text style={styles.errorText}>{errorText}</Text>
            </View>);
}

const styles = Stylesheet.create({
    container: {
        flexDirection: "row",
        width: 250,
    },
    errorText: {
        paddingRight: 15
    }
});
