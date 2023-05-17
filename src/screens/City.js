import React from 'react'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  View
} from 'react-native'
import IconText from '../components/IconText'

const City = () => {
  const {
    container,
    countryName,
    cityName,
    cityCountryText,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout,
    imageLayout
  } = styles
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('C:\\Users\\nada\\reactProject\\WeatherApp\\assets\\city-background.jpg')}
        style={imageLayout}
      >
        <Text style={[cityName, cityCountryText]}>Chaouen</Text>
        <Text style={[countryName, cityCountryText]}>Morocco</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={'user'}
            iconColor={'tomato'}
            bodyText={'8000'}
            bodyTextStyle={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={'sunrise'}
            iconColor={'#f0da82'}
            bodyText={'10:46:58am'}
            bodyTextStyle={riseSetText}
          />
          <IconText
            iconName={'sunset'}
            iconColor={'#f0da82'}
            bodyText={'17:28:15pm'}
            bodyTextStyle={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  imageLayout: {
    flex: 1
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 20
  },
  cityCountryText: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'white'
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30
  },
  riseSetText: {
    fontSize: 20,
    color: 'white'
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 100
  }
})
export default City
