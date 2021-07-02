import React from "react";
import { View, Text, FlatList } from "react-native";
import { string } from "yargs";
import { Album } from "../../types";
import styles from "./styles";
import AlbumComponent from "../Album";

export type AlbumCatagoryProps = {

    title: string,
    albums: [Album],

}



const AlbumCatagory = (props: AlbumCatagoryProps) => (

    <View style={ styles.container} >

        <Text
            style={styles.title}
        >{props.title}</Text>
        <FlatList

            data={props.albums}
            renderItem={
                ({ item }) =>

                    <AlbumComponent album={item} />}
            keyExtractor = {
                (item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}

        />




    </View>
)

export default AlbumCatagory;
