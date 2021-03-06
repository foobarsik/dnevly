import React, {useState, useEffect, useRef} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    Button,
    Dimensions
} from 'react-native';
import * as Clipboard from 'expo-clipboard';
import SwipeCards from "react-native-swipe-cards-deck";

import {ContentService} from "../services/DatabaseService";

function Card({data}) {
    return (
        <TouchableOpacity
            onPress={() => Clipboard.setString(data.content)}
            style={[styles.card, {backgroundColor: '#f5f5f5'},
                {width: Dimensions.get('window').width * .9},
                {height: Dimensions.get('window').height * .8}
            ]}>
            <Text selectable={true}>{data.content}</Text>
        </TouchableOpacity>
    );
}

function StatusCard({text}) {
    return (
        <View>
            <Text style={styles.cardsText}>{text}</Text>
        </View>
    );
}

export default function Cards({ navigation }) {
    let inputRef = useRef(null);
    const [cards, setCards] = useState();

    useEffect(() => {
        console.log('start!');
        ContentService.getAll()
            .then(res => setCards(res))
            .catch(error => {
                console.log(error)
            });
    }, []);

    function handleYup(card) {
        ContentService.update(card.id, {'is_validated': true})
        return true;
    }

    function handleNope(card) {
        ContentService.update(card.id, {'is_archived': true, 'is_validated': true})
        return true;
    }

    function handleMaybe(card) {
        ContentService.update(card.id, {'is_bookmarked': true, 'is_validated': true})
        return true;
    }

    return (
        <View style={styles.container}>
            {cards ? (
                <SwipeCards
                    ref={inputRef}
                    cards={cards}
                    renderCard={(cardData) => <Card data={cardData}/>}
                    keyExtractor={(cardData) => String(cardData.id)}
                    renderNoMoreCards={() => <StatusCard text="No more cards..."/>}
                    actions={{
                        nope: {onAction: handleNope},
                        yup: {onAction: handleYup},
                        maybe: {onAction: handleMaybe},
                    }}
                    hasMaybeAction={true}
                />
            ) : (
                <StatusCard text="Loading..."/>
            )}
            <Button onPress={() => inputRef.current._goToPrevCard()} title='Undo'/>
            <Button
                title="Go to Bookmarks"
                onPress={() => navigation.navigate('Bookmarks')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    card: {
        justifyContent: "center",
        alignItems: "center"
    },
    cardsText: {
        fontSize: 22,
    },
});
