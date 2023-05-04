import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, Stylesheet } from 'react-native';

export default function Index() {
    return(
        <view style={styles.container}>
            <Text style={styles.paragraph}>
                Exmplo 3
            </Text>

            <TouchableOpacity
                onPress={() => alert ('Ola mundo!!!') }
                style={styles.button}
            > 

                <text style={styles.textbutton}>
                  Ola mundo!!!
                </text>   
            </TouchableOpacity>

        </view>
    );
}

const styles = Stylesheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 26,
        fontweight: 'bold',
        textalign: 'center',
        color: '#9e9e9e',
    },
});