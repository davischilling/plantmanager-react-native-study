import React from 'react'
import {
  createStackNavigator
} from '@react-navigation/stack'
import colors from '../styles/colors'
import {
  Confirmation,
  UserIdentification,
  Welcome,
  PlantSelect
} from '../pages'

const stackRoutes = createStackNavigator()

const AppRoutes: React.FC = () => (
  <stackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white
      }
    }}
  >
    <stackRoutes.Screen
      name="Welcome"
      component={Welcome}
    />
    <stackRoutes.Screen
      name="UserIdentification"
      component={UserIdentification}
    />
    <stackRoutes.Screen
      name="Confirmation"
      component={Confirmation}
    />
    <stackRoutes.Screen
      name="PlantSelect"
      component={PlantSelect}
    />
  </stackRoutes.Navigator>
)

export default AppRoutes