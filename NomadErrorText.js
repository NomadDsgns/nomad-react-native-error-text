import React from 'react';
import { View, Text, Stylesheet } from 'react-native';


export default function ErrorText({ errorText }) {
    return (<View>
                <Text style={styles.text}>{errorText}</Text>
            </View>);
}

const styles = Stylesheet.create({
    text: {
        color: "red"
    }
});
