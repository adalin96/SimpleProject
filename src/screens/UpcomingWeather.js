import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  // StatusBar,
  ImageBackground
} from 'react-native'
import ListItem from '../components/ListItem'
const UpComingWeather = ({ WeatherData }) => {
  console.log('WeatherData:', WeatherData);

  
  const renderItem = ({ item }) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  )
  const { container, image } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('C:\\Users\\nada\\reactProject\\WeatherApp\\assets\\upcominweather-background2.jpg')}
        style={image}
      >
        <FlatList
          data={WeatherData}
          renderItem={renderItem}
          keyExtractor={(item) => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#9baeaa'
  },
  image: {
    flex: 1
  }
})
export default UpComingWeather
