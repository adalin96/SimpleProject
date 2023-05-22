import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import RowText from '../components/RowText'
import { weatherType } from '../utilities/weatherType'

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highlow,
    highlowWrapper,
    bodyWrapper,
    description,
    message
  } = styles

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData

  const weatherCondition = weather[0].main

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition].backgroundColor }
      ]}
    >
      <View style={container}>
        <Feather
          name={weatherType[weatherCondition].icon}
          size={100}
          color="#f0da82"
        />
        <Text style={tempStyles}>{temp}</Text>
        <Text style={feels}>{`Feels like ${feels_like}`}</Text>
        <RowText
          messageOne={`High: ${temp_max}`}
          messageTwo={`Low: ${temp_min}`}
          containerStyles={highlowWrapper}
          messageOneStyles={highlow}
          messageTwoStyles={highlow}
        />
      </View>
      <RowText
        messageOne={weather[0].description}
        messageTwo={weatherType[weatherCondition].message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    flex: 1,
    backgroundColor: '#849b9c'
  },
  tempStyles: {
    color: 'tomato',
    fontSize: 48
  },
  feels: {
    fontSize: 30,
    color: '#fcf7d8'
  },
  highlow: {
    color: '#fff9f2',
    fontSize: 20
  },
  highlowWrapper: {
    flexDirection: 'row'
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48,
    color: '#f0da82'
  },
  message: {
    fontSize: 28,
    color: '#fcf7d8'
  }
})
export default CurrentWeather
