import React, {Component} from 'react';
import {
    AsyncStorage,
    ScrollView,
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';
import i18n from 'i18n-js';
import {ThemeProvider} from '@shopify/restyle';

import common_en from './translation/en/common.json';
import common_ru from './translation/ru/common.json';
import common_ua from './translation/ua/common.json';
import {theme, darkTheme, Box, Text} from './utils/theme';
import Accordion from './components/Accordion'
import StartTime from './components/forms/StartTime'
import PainScale from "./components/forms/PainScale";
import PainLocation from "./components/forms/PainLocation";

export default class App extends Component {
    state = {
        darkMode: true,
        activeSections: [],
        collapsed: true,
        multipleSelect: false,
        pain: '0',
        lang: 'en'
    };

    setLang() {
        i18n.translations = {
            en: common_en,
            ru: common_ru,
            ua: common_ua,
        };
        i18n.locale = this.state.lang;
        i18n.fallbacks = true;
    }

    changeLanguage = (lang) => {
        this.setState({lang: lang});
    };

    getLanguage = async lang => {
        await AsyncStorage.getItem('language');
    };

    toggleExpanded = () => {
        this.setState({collapsed: !this.state.collapsed});
    };

    setSections = (sections) => {
        this.setState({
            activeSections: sections.includes(undefined) ? [] : sections,
        });
    };

    setPain = (num) => {
        this.setState({pain: num});
    };

    renderHeader = (section, _, isActive) => {
        return (
            <View style={[styles.header, isActive ? styles.active : styles.inactive]}>
                <Text style={styles.headerText}>{section.title}</Text>
            </View>
        );
    };

    render() {
        this.setLang();
        const CONTENT = [
            {
                title: 'Duration (when did symptoms started?) (time range) (start & end time of the attack)',
                content: <StartTime title='title'/>,
            },
            {
                title: 'Attack types (Migraine TTH Aura)',
                content: <StartTime title='title'/>,
            },
            {
                title: 'Pain Location',
                content: <PainLocation/>,
            },
            {
                title: 'Pain Intensity',
                content: <PainScale pain={this.state.pain} handler={this.setPain}/>,
            },
            {
                title: 'Pain Type',
                content: <StartTime title='title'/>,
            },
            {
                title: 'Symptoms',
                content: <StartTime title='title'/>,
            },
            {
                title: 'Aura (в симптомы засунуть отдельным списком)',
                content: <StartTime title='title'/>,
            },
            {
                title: 'Physical Activity (тоже можно в симтомы запихнуть, хуже при движе, лучше при движе)',
                content: <StartTime title='title'/>,
            },
            {
                title: 'Triggers',
                content: <StartTime title='title'/>,
            },
            {
                title: 'Medication',
                content: <StartTime title='title'/>,
            },
            {
                title: 'Sleep',
                content: <StartTime title='title'/>,
            },
            {
                title: 'Are you having period now?',
                content: <StartTime title='title'/>,
            },
            {
                title: 'Where are you were when pain started?',
                content: <StartTime title='title'/>,
            },
            {
                title: 'Impact (MIDAS)',
                content: <StartTime title='title'/>,
            },
            {
                title: 'Food',
                content: <StartTime title='title'/>,
            },
            {
                title: 'End time',
                content: <StartTime title='title'/>,
            },
            {
                title: 'Note',
                content: <StartTime title='title'/>,
            },
        ];
        return (
            <ThemeProvider theme={this.state.darkMode ? darkTheme : theme}>
                <Box padding="m" backgroundColor="mainBackground" flex={1}>

                    <Box flexWrap='wrap' flexDirection='row'>
                        <Box
                            backgroundColor="primaryCardBackground"
                            margin="s"
                            padding="m"
                            flexGrow={1}
                        >
                            <TouchableOpacity
                                onPress={() => this.changeLanguage('en')}>
                                <Text style={{color: '#fff'}}>EN</Text>
                            </TouchableOpacity>
                        </Box>

                        <Box
                            backgroundColor="secondaryCardBackground"
                            margin="s"
                            padding="m"
                            flexGrow={1}
                        >
                            <TouchableOpacity
                                onPress={() => this.changeLanguage('ru')}>
                                <Text style={{color: '#fff'}}>RU</Text>
                            </TouchableOpacity>
                        </Box>

                        <Box
                            backgroundColor="secondaryCardBackground"
                            margin="s"
                            padding="m"
                            flexGrow={1}
                        >
                            <TouchableOpacity
                                onPress={() => this.changeLanguage('ua')}>
                                <Text style={{color: '#fff'}}>UA</Text>
                            </TouchableOpacity>
                        </Box>

                        <Box marginTop="m">
                        </Box>
                    </Box>
                    <ScrollView contentContainerStyle={{paddingTop: 30}}>
                        <View style={styles.selectors}>
                            <Text style={styles.selectTitle} variant="body" color="secondaryCardText">
                                {i18n.t('welcome')}
                                Username</Text>
                            <Text style={styles.selectTitle}>Здесь будут шаблоны</Text>
                        </View>
                        {CONTENT.map(({title, content}) => {
                            return <Accordion title={title} viewInside={content}/>
                        })}
                    </ScrollView>
                </Box>
            </ThemeProvider>

        )
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '300',
    },
    header: {
        width: '96%',
        margin: 'auto',
        borderRadius: 10,
        backgroundColor: '#FFF',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
    },
    headerText: {
        textAlign: 'left',
        fontSize: 16,
        fontWeight: '500',

    },
    content: {
        width: '96%',
        padding: 20,
        backgroundColor: '#FFF',
        margin: 'auto',
        marginBottom: 20
    },
    active: {
        backgroundColor: '#FFF'
    },
    inactive: {
        backgroundColor: '#FFF',
        marginBottom: 20,
    },
    selectors: {
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    selector: {
        backgroundColor: '#F5FCFF',
        padding: 10,
    },
    activeSelector: {
        fontWeight: 'bold',
    },
    selectTitle: {
        fontSize: 14,
        fontWeight: '500',
        padding: 10,
    },
    multipleToggle: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 30,
        alignItems: 'center',
    },
    multipleToggle__title: {
        fontSize: 16,
        marginRight: 8,
    },
});
