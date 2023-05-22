/* eslint-disable react/no-unstable-nested-components */
import React from 'react'
import CurrentWeather from '../screens/CurrentWeather'
import UpComingWeather from '../screens/UpcomingWeather'
import City from '../screens/City'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs = ({ weather }) => {
  return (
    <Tab.Navigator
      //tabs need to be set this way following reacts requirements and so eslints warning is disabled for this file
      screenOptions={{
        tabBarActiveTintColor: '#d84b08',
        tabBarInactiveTintColor: '#e1d6c2',
        tabBarStyle: {
          backgroundColor: '#9baeaa'
        },
        headerStyle: {
          backgroundColor: '#9baeaa'
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: '#e1d6c2'
        }
      }}
    >
      <Tab.Screen
        name={'Current'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'droplet'}
              size={25}
              color={focused ? 'tomato' : '#e1d6c2'}
            />
          )
        }}
      >
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        name={'UpComing'}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'clock'}
              size={25}
              color={focused ? 'tomato' : '#e1d6c2'}
            />
          )
        }}
      >
        {() => <UpComingWeather weatherData={weather.list} />}
      </Tab.Screen>
      <Tab.Screen
        name={'City'}
        component={City}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather
              name={'home'}
              size={25}
              color={focused ? 'tomato' : '#e1d6c2'}
            />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs
