import React, {useEffect, useState} from "react";
import {FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity} from "react-native";
import * as Clipboard from 'expo-clipboard';

import {ContentService} from "../services/DatabaseService";

const Item = ({item, onPress, backgroundColor, textColor}) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
        <Text style={[styles.content, textColor]}>{item.content}</Text>
    </TouchableOpacity>
);

export default function Bookmarks({navigation}) {
    const [selectedId, setSelectedId] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        let data = [
            {
                id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
                content: "-Ну Скрол, присаживайся, рассказывай кто ты.\n" +
                    "- Ну я, просто поехавший, качусь туда сюда, зато красиво\n" +
                    "- Это всё?\n" +
                    "- Не еще я, просто очень красивый и качусь туда сюда тоже красиво\n" +
                    "- Ты это уже говорил..\n" +
                    "- Да, точно, ну тогда я просто очень красивый и качусь туда сюда пиииздец красиво\n" +
                    "- Мы поняли\n" +
                    "- Я КРАСИВЫЙ И КАЧУУУСЬ\n" +
                    "- Да-Да, катись нахрен отсюда\n",
            },
            {
                id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
                content: "- О карт точка ДжиЭс, здарова чувак\n" +
                    "- Чуваааааааааааааааааааак\n" +
                    "- Чувааааааааааааааааааааааааааак\n" +
                    "- А кто это с тобой?\n" +
                    "- А это мой брат, правда похожи?\n" +
                    "- Ну, как бы.. да,  он красавчик\n" +
                    "---Картинка номер 2----\n" +
                    "- Это чувак помог мне заработать, ну точнее он теперь работает вместо меня\n" +
                    "- Чувак, это круто, молодец, что нашел своего брата\n" +
                    "- Да, круто, правда в его ориентацие, полу и внешности я не очень уверен, он точно похож на меня?\n" +
                    "- Да ладно тебе бро, не переживай, он такой же красавчик как и ты\n" +
                    "- Ладно я пошел бро, хорошей передачи\n" +
                    "- Спасибо бро и вам удачи!",
            },
            {
                id: "58694a0f-3da1-471f-bd96-145571e29d72",
                content: "Так, наш последний гость \"барабанная дробь\"\n" +
                    "ФИОЛЕТОВЫЙ ЦВЕТ\n" +
                    "- Да пошел ты нахрен, я лавандовый\n" +
                    "- бро ты как пластиковый контейнер из под акварели, правда в тебе всего один цвет, фиолетовый\n" +
                    "- ТЫ ШО АХУЕВ, там разные оттенки лавандового\n" +
                    "- Охрана!\n" +
                    "- Я БУДУ ЖАЛОВАТЬ ЭТО УГНЕТЕНИЕ ЛАВАНДОВЫХ!!\n" +
                    "- Да всем насрать, ты зеленых угнетал, даже изгнал нахрен, ниче, они не жалуются",
            },
        ];

        setItems(data);
    }, []);

    const renderItem = ({item}) => {
        const backgroundColor = item.id === selectedId ? "#161b22" : "#282f39";
        const color = item.id === selectedId ? '#dadfe6' : 'white';

        return (
            <Item
                item={item}
                onPress={() => {
                    setSelectedId(item.id);
                    Clipboard.setString(item.content)
                }}
                backgroundColor={{backgroundColor}}
                textColor={{color}}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                extraData={selectedId}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    content: {
        fontSize: 16
    },
});
