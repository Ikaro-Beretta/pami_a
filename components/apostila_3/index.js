import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Index() {
    return(
        <View style={styles.container}>
            <Text style={styles.paragraph}>
                Exmplo 3
            </Text>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#000',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#9e9e9e',
    },
});