import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Header from '../../Components/Hearder';

const CreateRecords = () => {
    return (
        <>
            <Header />
            <Text style={styles.text}>Hello Create-Records!</Text>
        </>
    );
};

const styles = StyleSheet.create({
    text: {
      marginTop:  100,
      fontSize: 25,
      color: '#fff',
      textAlign: 'center',
    },
});

export default CreateRecords;