import React from 'react';
import {View, Text , Image} from 'react-native';
import Card from './Card';
import CardSelection from './CardSelection';

const AlbumDetail =({album})=>{

    const {title, artist, thumbnail_image , image} = album;
    const {thumbnailStyle , headerContentStyle,albumCover,thumbnailContainerStyle} = styles;

    return(
        <Card>
            <CardSelection>
            <View style = {thumbnailContainerStyle}>
                <Image 
                style= {thumbnailStyle}
                source = {{uri : thumbnail_image}}/>
            </View>
            <View style= {headerContentStyle}>
                <Text>{title}</Text>
                <Text>{artist}</Text>
            </View>
            </CardSelection>
            <CardSelection >
                <Image 
                style = {albumCover}
                source = {{uri : image}}/>   
            </CardSelection>
        </Card> 
    );
};

const styles = {
    headerContentStyle :{
        flexDirection : 'column',
        justifyContent : 'space-around'
    },
    thumbnailStyle :{
        height : 50,
        width : 50
    },
    thumbnailContainerStyle:{
        justifyContent:'center',
        alignItems : 'center',
        marginLeft : 10,
        marginRight :10 
    },
    albumCover:{
        flex :1,
        height : 300,
        width : null
    }
};

export default AlbumDetail