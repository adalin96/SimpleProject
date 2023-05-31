import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  // StatusBar,
  ImageBackground
} from 'react-native'
import ListItem from '../components/ListItem'
import { te } from 'date-fns/locale'
const DATA = [
{   
    dt_txt: "2021-02-19 12:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
  weather: [
    {
      main: 'Clear'
    }
  ]},
  {
    dt_txt: "2021-02-19 15:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: 'Clear'
      }
    ]
  },
  {
    dt_txt: "2021-02-19 18:00:00",
    main: {
      temp_max: 8.55,
      temp_min: 7.55
    },
    weather: [
      {
        main: 'Rain'
      }
    ]
  }
]
const UpComingWeather = ({ WeatherData }) => {
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
          data={/*WeatherData*/DATA}
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
