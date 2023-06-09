import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { weatherType } from '../utilities/weatherType'
import { format } from 'date-fns'
import { te } from 'date-fns/locale'

const ListItem = (props) => {
  const { dt_txt, min, max, condition } = props
  const { item, date, temp, dateTextWrapper } = styles
  return (
    <View style={item}>
      {/* <Feather name={weatherType[condition].icon} size={50} color={'#f0da82'} />
      <View style={dateTextWrapper}>
        <Text style={date}>{format(dt_txt, 'dddd')}</Text>
        <Text style={date}>{format(dt_txt, 'h:mm:ss a')}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)}° / ${Math.round(max)}°`}</Text>
       */}
      <Feather name={'sun'} size={50} color={'white'} />
      <Text style={date}>{dt_txt}</Text>
      <Text style={temp}>{min}</Text>
      <Text style={temp}>{max}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'tomato',
    backgroundColor: '#9baeaa'
  },
  temp: {
    color: '#fff9f2',
    fontSize: 20
  },
  date: {
    color: '#fcf7d8',
    fontSize: 15
  }
  // dateTextWrapper: {
  //   flexDirection: 'column'
  // }
})
export default ListItem
