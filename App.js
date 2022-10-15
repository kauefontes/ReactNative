import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto"/>
            <Text style={styles.title}>React Native React!</Text>
            <View style={styles.card}>
                <Text style={styles.cardTitle}>React Native</Text>
                <Text style={styles.cardSubtitle}>Creating React Native Apps</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2A2A2A',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 24,
        marginBottom: 24
    },
    card: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 3
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    cardSubtitle: {
        color: '#999',
        fontSize: 14
    }
});
