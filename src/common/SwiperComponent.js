import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';


export default function SwiperComponent ({source}){
    return(
        <Swiper style={styles.wrapper}
                dotStyle={styles.dotStyle}
                activeDotColor='#FFF'
                activeDotStyle={{
                    borderColor:"#000",
                    borderWidth: 1, 
                    width: 10, height: 10, 
                    borderRadius: 10
                }}>
                    <View style={styles.slide}>
                        <Image source={source}
                                style={{height: 300, width: 300, resizeMode: 'contain'}}/>
                    </View>
        </Swiper>
    );
}

const styles = StyleSheet.create({
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFF"
    },
    dotStyle: {
        backgroundColor: "#000",
        borderColor:"#000",
        borderWidth: 1,
        width: 10, 
        height: 10, 
        borderRadius: 10
    }
})