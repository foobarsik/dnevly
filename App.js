import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import * as Clipboard from 'expo-clipboard';
import SwipeCards from "react-native-swipe-cards-deck";

import {ContentService} from "./services/DatabaseService";

function Card({ data }) {
    return (
        <TouchableOpacity onPress={()=> Clipboard.setString(data.content)}  style={[styles.card, { backgroundColor: '#f5f5f5' }]}>
            <Text selectable={true}>{data.content}</Text>
        </TouchableOpacity>
    );
}

function StatusCard({ text }) {
    return (
        <View>
            <Text style={styles.cardsText}>{text}</Text>
        </View>
    );
}

export default function App() {
    const [cards, setCards] = useState();

    useEffect(() => {
        ContentService.getAll()
            .then(res => {
                console.log(res[1]);
                setCards(res);
            })
            .catch(error => {
                console.log('error')
            });
    }, []);

    function handleYup(card) {
        console.log(`Yup for ${card.id}`);
        return true;
    }
    function handleNope(card) {
        console.log(`Nope for ${card.id}`);
        return true;
    }
    function handleMaybe(card) {
        console.log(`Maybe for ${card.id}`);
        return true;
    }

    return (
        <View style={styles.container}>
            {cards ? (
                <SwipeCards
                    cards={cards}
                    renderCard={(cardData) => <Card data={cardData}  />}
                    keyExtractor={(cardData) => String(cardData.id)}
                    renderNoMoreCards={() => <StatusCard text="No more cards..." />}
                    actions={{
                        nope: { onAction: handleNope },
                        yup: { onAction: handleYup },
                        maybe: { onAction: handleMaybe },
                    }}
                    hasMaybeAction={true}
                />
            ) : (
                <StatusCard text="Loading..." />
            )}
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
        alignItems: "center",
        width: 300,
        height: 300,
    },
    cardsText: {
        fontSize: 22,
    },
});
