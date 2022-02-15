import React, {useState} from 'react';
import {Image, StyleProp, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle} from "react-native";
import Collapsible from "react-native-collapsible";
import {theme} from "../utils/theme";

const downArrow = require("../assets/ic-expand-more.png");
const upArrow = require("../assets/ic-expand-less.png");

export default function Accordion({
                                      title = "",
                                      viewInside,
                                      startCollapsed = true,
                                      showContentInsideOfCard = true,
                                      showArrows = true,
                                      arrowColor = "#000000",
                                      viewContainerStyle = {},
                                      bannerStyle = {},
                                      titleStyle = {}
                                  }) {

    const [isCollapsed, setIsCollapsed] = React.useState(startCollapsed);

    return (
        <View key={title} style={[styles.container, !isCollapsed && {borderColor: 'transparent'}]}>
            <TouchableOpacity style={[styles.defaultBannerStyle, bannerStyle]}
                              onPress={() => setIsCollapsed(!isCollapsed)}>
                <View style={styles.titleContainer}>
                    <Text style={[styles.defaultTitleStyle, titleStyle]}>{title}</Text>
                </View>
                {
                    showArrows &&
                    <Image source={isCollapsed ? downArrow : upArrow} style={[styles.arrows, {tintColor: arrowColor}]}/>
                }
            </TouchableOpacity>

            <Collapsible collapsed={isCollapsed} style={[styles.collapsible]}>
                <View style={[
                    styles.defaultViewContainer,
                    showContentInsideOfCard ? styles.card : styles.nothing,
                    viewContainerStyle
                ]}>
                    {
                        viewInside
                    }
                </View>
            </Collapsible>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.mainForeground,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: theme.colors.border,
        borderRadius: 30,
        width: '96%',
        marginLeft: '2%',
        marginBottom: 15,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 5,
        paddingLeft: 16,
        paddingRight: 16,
        overflow: 'hidden'
    },
    nothing: {},
    arrows: {
        height: 32,
        width: 32,
        resizeMode: "contain"
    },
    defaultBannerStyle: {
        height: 60,
        flexDirection: "row",
        alignItems: "center"
    },
    defaultTitleStyle: {
        fontSize: 16,
        color: theme.colors.primaryCardText
    },
    defaultViewContainer: {
        paddingBottom: 16,
        backgroundColor: theme.colors.mainForeground
    },
    titleContainer: {
        flex: 1
    }
});
