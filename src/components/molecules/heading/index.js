import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Heading = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.logo}>INALUM - Blog</Text>
            <Text
                onPress={() => {
                    alert('Contact US : (061) 889 778')
                }}
            >
                Contact
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header : {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#68b35c'
    },
    logo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
});

export default Heading;