import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import PlayerWidgets from './components/PlayerWidget';
import Amplify from 'aws-amplify';

import SplashScreen from './screens/SplashScreen';
import { View } from 'react-native';






export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [songId, setSongId] = useState<string|null>(null);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
    
      
    
      <SafeAreaProvider>
       
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
          <PlayerWidgets />
          
          
      
        
      </SafeAreaProvider>
    
    );
  }
}