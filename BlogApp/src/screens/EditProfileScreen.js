import React from "react";
import { View, StyleSheet } from "react-native";

const EditProfileScreen = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Edit Profile Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        color: "blue",
    },
    viewStyle: {
        flex: 1,
        backgroundColor: "#e2e7fe"
    },
});

export default EditProfileScreen;