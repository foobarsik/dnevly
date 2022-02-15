import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function TimePicker({ data, onSelect }) {
    const [userOption, setUserOption] = useState(null);
    const selectHandler = (value) => {
        onSelect(value);
        setUserOption(value);
    };

    return (
        <View>
            {data.map((item) => {
                return (
                    <Pressable
                        style={
                            item === userOption ? styles.selected : styles.unselected
                        }
                        onPress={() => selectHandler(item)}>
                        <Text style={styles.option}> {item}</Text>
                    </Pressable>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    option: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    unselected: {
        backgroundColor: 'red',
        margin: 5,
    },
    selected: {
        backgroundColor: 'blue',
        margin: 6,
        padding: 10,
        borderRadius: 10,
    },
});
