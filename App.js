import React from 'react'
import { ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import { View, StyleSheet } from 'react-native'
import Constants from 'expo-constants'

import { useGetWeather } from './src/hooks/useGetWeather'
const WEATHER_API_KEY = Constants.manifest.extra.WEATHER_API_KEY

console.log('hi hello ayo')
console.log(WEATHER_API_KEY)

const App = () => {
  const [loading, error, weather] = useGetWeather()
  console.log(loading, error, weather)

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'green'} />
      </View>
    )
  }
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App
