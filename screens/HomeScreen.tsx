import * as React from 'react';
import { StyleSheet,Text, View,FlatList  } from 'react-native';
import AlbumCatagory from '../components/AlbumCatagory';
import albumCategories from '../data/albumCategories';
import { useEffect } from 'react';
import { useState } from 'react';
import {API ,graphqlOperation} from "aws-amplify"; 
import {listAlbumCategorys} from "../src/graphql/queries";
 import { Header } from '../components';

export default function HomeScreen() {
  const[categories,setCategories]=useState([]);











useEffect(

 
   

  ()=>{
    const fetchAlbumCatagories = async()=>{


    try{
     

      const data= await API.graphql(graphqlOperation(listAlbumCategorys));
     // setCategories(data.data.listAlbumCategorys.items);
     console.log(data);
    }
    catch(e){
      console.log(e);
    }

  }




    fetchAlbumCatagories();
  },[]);


  return (
    <View style={styles.container}>
      <FlatList 
      data={albumCategories}
      renderItem={({item})=>(<AlbumCatagory 
      title={item.title}
      albums={item.albums}
     

      />) }
      keyExtractor={
        (item)=>item.id
      }


      
      />



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
