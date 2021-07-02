import React, { useEffect} from 'react';
import {Text, Image, View, TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import styles from './styles';
import {Song} from "../../types";
import { useState } from 'react';
import { Sound } from 'expo-av/build/Audio';
const song={
  id: '1',
  uri:"https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
  title: 'High on You',
  artist: 'Helen',
}


const PlayerWidget = () => {

  const [sound,setSound]=useState<Sound|null>(null);
  const [isPlaying,setisPlaying]=useState<Sound|null>(true);
  const [duration,setDuration]=useState<number|null>(null);

    const [position,setPosition]=useState<number|null>(null);

  const onPlaybackStatusUpdate =(status:any)=>{
    setisPlaying(status.isPlaying);
    setDuration(status.durationMillis);
    setPosition(status.positionMillis);

  }
  const playCurrentSong=async()=>{

    if(sound){
      await sound.unloadAsync();
    }

    const {sound :newSound} =await Sound.createAsync(
      {uri:song.uri},
      {shouldPlay:isPlaying},
      onPlaybackStatusUpdate
    )

    setSound(newSound)
  }




  useEffect(() => {
    playCurrentSong();

  },[])

  const onPlayPausePress=async()=>{
    if(!sound){
      return;
    }

    if(isPlaying){
      await sound.stopAsync();
    }
    else{
      await sound.playAsync();
    }


  }

  const getProgress=()=>{
    if(sound===null || duration ===null || position ===null){
      return 0;
    }

    return (position/duration)*100;


  }


  return (

    <View style={styles.container}>
      <View style={[styles.progress,{width:`${getProgress()}%`}]} />

      <View style={styles.row} >
      <Image source={{ uri: song.imageUri }} style={styles.image} />
      <View style={styles.rightContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.title}>{song.title}</Text>
            <Text style={styles.artist}>{song.artist}</Text>
          </View>

          <View style={styles.iconsContainer}>
          <AntDesign name="hearto" size={24} color="black" />
          <TouchableOpacity
          onPress={onPlayPausePress}
          >
            
          <AntDesign name={isPlaying?"pause":"playcircleo"} size={24} color="black" />


          </TouchableOpacity>
          
          </View>
        </View>



        </View>
    
      
        
      </View>
  
  )
}

export default PlayerWidget;
