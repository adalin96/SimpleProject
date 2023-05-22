import React from 'react'
import { ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/components/Tabs'
import { View, StyleSheet } from 'react-native'

import { useGetWeather } from './src/hooks/useGetWeather'

console.log('hi hello ayo')
const App = () => {
  const [loading, error, weather] = useGetWeather()
  console.log(loading, error, weather)

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={'green'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
})

export default App
