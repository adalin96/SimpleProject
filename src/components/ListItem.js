import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'

const ListItem = (props) => {
  const { dt_txt, min, max } = props
  const { item, date, temp } =  styles
  return (
    <View style={item}>
      <Feather name={'sun'} size={50} color={'#f0da82'} />
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
})
export default ListItem
