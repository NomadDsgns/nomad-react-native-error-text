import React from 'react';
import { View, Text, Stylesheet } from 'react-native';


export default function ErrorText({ text }) {
    return (<View>
                <Text style={styles.text}>{text}</Text>
            </View>);
}

const styles = Stylesheet.create({
    text: {
        color: "red"
    }
});
