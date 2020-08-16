import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, StatusBar} from 'react-native';
import Swiper from 'react-native-swiper';
import { ThemeConsumer } from 'react-native-elements';

import {useTheme} from '@react-navigation/native';

import {lectureApi, noticeApi, bbsApi} from '../../api';

import Slide from '../components/Slide';

const HomeScreen = () => {

    // const [lectures, setLectures] = useState({
    //     ncs: [],
    //     psat: [],
    //     notice: [],
    //     bbs: [],
    //     ncsError: null,
    //     psatError: null,
    //     noticeError: null,
    //     bbsError: null,
    //     loading: true
    // });

    // ncs Api 불러오기
    const [ncs, setNcs] = useState([]);
    const [psat, setPsat] = useState([]);


    const getData = async () => {
        const [ncs, ncsError] = await lectureApi.ncs();
        const [psat, psatError] = await lectureApi.psat();
        const [notice, noticeError] = await noticeApi.notice();
        const [bbs, bbsError] = await bbsApi.bbs();

        setLectures({
            ncs,
            ncsError,
            psat,
            psatError,
            notice,
            noticeError,
            bbs,
            bbsError,
            loading: false
        });
    };

    useEffect(() => {
        // getData();
        // console.log(ncs);
        fetch('https://pure-retreat-35508.herokuapp.com/lecture/ncs')
            .then((response) => response.json())
            .then((ncs) => {
                setNcs(ncs.results)
                console.log("NCS is: ", ncs.results)
            })
            .catch(err => console.log(err));
        
        // fetch('https://pure-retreat-35508.herokuapp.com/lecture/psat')
        //     .then((response) => response.json())
        //     .then((psat) => {
        //         setPsat(psat.results)
        //         // console.log("PSAT is: ", psat.results)
        //     })
        //     .catch(err => console.log(err));


        
    }, []);
    

    const {colors} = useTheme();

    const theme = useTheme();
    
    return (
        <ScrollView
            style={styles.container}      
        >
            <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content' } />
            <View style={styles.sliderContainer}>
                <Swiper
                    loop 
                    timeout={3}
                    height={258}
                    activeDotColor='#fff' 
                >
                    {ncs.map(item => (
                        <View style={styles.container}>
                            <View >
                                <Text>{item.title}</Text>
                                <Image 
                                    source={require('../../assets/test.jpg')}
                                    resizeMode="cover"
                                    style={styles.sliderImage}
                                />
                            </View>
                        
                            {/* <Image 
                                source={require('../../assets/test.jpg')}
                                resizeMode="cover"
                                style={styles.sliderImage}
                            />
                            <View style={styles.content}>
                                <View style={styles.data}>
                                    <Text>
                                        {item.title}
                                        
                                    </Text>
                                </View>
                                
                            </View> */}
                        </View>
                            
                        
                    
                        // <Slide
                        //     key={item._id}
                        //     id={item._id}
                        //     title={item.title}
                        //     desc={item.desc}
                        //     thumbnail={item.thumbnail}
                        //     uploadDate={item.createdAt}
                        // />
                    ))}
                </Swiper>

            </View>
        
        </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sliderContainer: {
        height: 250,
        width: '90%',
        marginTop: 20,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    },

    wrapper: {},

    content: {
        height: '100%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    data: {
        width: '50%',
        alignItems: 'flex-start'
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 8,
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        opacity: 0.4
    },
    categoryContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 10,
    },
    categoryBtn: {
        flex: 1,
        width: '30%',
        marginHorizontal: 0,
        alignSelf: 'center',
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 70,
        height: 70,
        backgroundColor: '#fdeae7' /* '#FF6347' */,
        borderRadius: 50,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        marginTop: 7,
        color: '#de4f35',
    },
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 150,
        marginVertical: 10,
        flexDirection: 'row',
        // shadowColor: '#999',
        // shadowOffset: {width: 0, height: 1},
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
        elevation: 5,
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        // borderRadius: 8,
        // borderBottomRightRadius: 0,
        // borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 15,
        borderColor: '#ccc',
        borderWidth: 0.5,
        borderLeftWidth: 0,
        // borderBottomRightRadius: 8,
        // borderTopRightRadius: 8,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 10
    },
    cardDetails: {
        fontSize: 13,
        color: '#444',
        marginTop: 10
    },
});