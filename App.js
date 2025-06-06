import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from './src/core/theme'
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Dashboard,
  Profile
} from './src/screens'
import Toast from 'react-native-toast-message'
import Verify from './src/screens/register/verify'
import Document from './src/screens/document/Document'
import Department from './src/screens/department/Department'
import EmployeePopup from './src/screens/employee/EmployeePopup'
import DepartmentDetail from './src/screens/department/DepartmentDetail'
import Timesheet from './src/screens/department/Timesheet'
import Employee from './src/screens/employee/Employee'
import Permission from './src/screens/permission/Permission'

const Stack = createStackNavigator()

export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Dashboard"
          // initialRouteName="RegisterScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Verify" component={Verify} />
          <Stack.Screen name="Document" component={Document} />
          <Stack.Screen name="Department" component={Department} />
          <Stack.Screen name="EmployeePopup" component={EmployeePopup} />
          <Stack.Screen name="Employee" component={Employee} />
          <Stack.Screen name="DepartmentDetail" component={DepartmentDetail} />
          <Stack.Screen name="Timesheet" component={Timesheet} />
          <Stack.Screen name="Permission" component={Permission} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <Toast position="top" />
    </Provider>
  )
}
