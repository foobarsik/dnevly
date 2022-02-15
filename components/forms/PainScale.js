import React from 'react';
import {View, Pressable, Text, StyleSheet} from 'react-native';
import {theme} from "../../utils/theme";
import i18n from 'i18n-js';

const scales = [
    {
        num: '10',
        title: 'Emergency',
        desc: 'I can\'t move because of my pain. I need someone to get me to emergence room.',
        color: 'rgb(255, 0, 0)'
    },
    {
        num: '9',
        title: 'Severe',
        desc: 'I can\'t move because of my pain. I need someone to get me to emergence room.',
        color: 'rgb(255, 41, 41)'
    },
    {
        num: '8',
        title: 'Intense',
        desc: 'I can\'t move because of my pain. I need someone to get me to emergence room.',
        color: 'rgb(242, 78, 47)'
    },
    {
        num: '7',
        title: 'Unmanageable',
        desc: 'I can\'t move because of my pain. I need someone to get me to emergence room.',
        color: '#ff7300'
    },
    {
        num: '6',
        title: 'Distracting',
        desc: 'I can\'t move because of my pain. I need someone to get me to emergence room.',
        color: '#ffa200'
    },
    {
        num: '5',
        title: 'Distracting',
        desc: 'I can\'t move because of my pain. I need someone to get me to emergence room.',
        color: '#ffc600'
    },
    {
        num: '4',
        title: 'Moderate',
        desc: 'I can\'t move because of my pain. I need someone to get me to emergence room.',
        color: '#b1ee2c'
    },
    {
        num: '3',
        title: 'Uncomfortable',
        desc: 'I can\'t move because of my pain. I need someone to get me to emergence room.',
        color: '#69e937'
    },
    {
        num: '2',
        title: 'Mild',
        desc: 'I can\'t move because of my pain. I need someone to get me to emergence room.',
        color: '#25d262'
    },
    {
        num: '1',
        title: 'Minimal',
        desc: 'I can\'t move because of my pain. I need someone to get me to emergence room.',
        color: '#0fb98b'
    },
    {
        num: '0',
        title: 'No pain',
        desc: '',
        color: 'rgb(20, 217, 198)'
    }
]

export default function PainScale({pain, handler}) {
    return (
        <View>
            <Text>{i18n.t('welcome')}</Text>
            {scales.map(({num, title, desc, color}, i) => {

                return (
                    <Pressable key={num} onPress={() => handler(num)}>
                        <View style={[styles.item]}>
                            <Text style={[
                                styles.num, {borderColor: color,},
                                pain === num && {backgroundColor: color},
                                (i === 0) && styles.topItem,
                                (i === scales.length - 1) && styles.bottomItem
                            ]}>{num}</Text>
                            <Text style={styles.title}>{title}</Text>
                        </View>
                    </Pressable>
                )
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        height: 42,
        display: "flex",
        flexDirection: 'column',
        flexWrap: "wrap",
        justifyContent: 'space-between'
    },
    topItem: {
        borderTopWidth: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    bottomItem: {
        borderBottomWidth: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    num: {
        borderWidth: 1,
        borderBottomWidth: 0,
        borderTopWidth: 0,
        borderStyle: 'solid',
        width: 42,
        fontSize: 22,
        height: '100%',
        color: '#fff',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    title: {
        textAlign: 'left',
        textAlignVertical: 'center',
        height: '100%',
        width: '100%',
        paddingLeft: 10,
        backgroundColor: theme.colors.mainForeground,
        color: '#fff'
    }
})
