import { View, Text } from 'react-native'
import React from 'react'
import Carousel, {ParallaxImage, ParallaxImageProperties} from 'react-native-snap-carousel';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {sliderImages} from '../constants'

export default function ImageSlider() {
  return (
    <Carousel
        data={sliderImages}
        loop={true}
        autoplay={true}
        //@ts-ignore
        renderItem={ItemCard}
        hasParallaxImages={true}
        sliderWidth={wp(100)}
        firstItem={1}
        autoplayInterval={4000}
        itemWidth={wp(100)-70}
        slideStyle={{display: 'flex', alignItems: 'center'}}
    />

  )
}

const ItemCard = ({item, index}: any, parallaxProps: React.JSX.IntrinsicAttributes & React.JSX.IntrinsicClassAttributes<ParallaxImage> & Readonly<ParallaxImageProperties>)=>{
    return (
        <View style={{width: wp(100)-70, height: hp(25)}}>
            <ParallaxImage
             //@ts-ignore
                source={item}
                containerStyle={{borderRadius: 30, flex:1}}
                style={{resizeMode: 'contain'}}
                parallaxFactor={1}
                {...parallaxProps}
            />
        </View>
    )
}