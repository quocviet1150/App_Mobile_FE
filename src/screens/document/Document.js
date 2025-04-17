import React from 'react';
import { View } from "react-native";
import Background from "../../components/Background";
import Header from "../../components/Header";
import Footer from "../component/Footer";

export default function Document({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.main}>
                <Background>
                    <Header>Let’s start</Header>
                </Background>
            </View>
            <Footer navigation={navigation} title="Document" />
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    main: {
        flex: 1,
    },
};