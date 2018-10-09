import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native'

const HomeComponent = ({ messages }) => {
    return (
        <ScrollView>
            {
                messages.map(data =>
                    <Text style={styles.container}>{data.body}</Text>
                )
            }
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 20,
        backgroundColor: 'orange',
        margin: 10,
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 70,
    }
});

export default HomeComponent