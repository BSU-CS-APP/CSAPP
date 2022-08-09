import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import WelcomeScreen from "./Screens/WelcomeScreen.jsx"
import AppButton from "./Component/AppButton"
import LoginScreen from "./Screens/LoginScreen.jsx"
import AppTextInput from "./Component/AppTextInput"
import CourseDetailScreen from "./Screens/CourseDetailScreen"
import Card from "./Component/Card"
import Icon from "./Component/Icon"
import InternshipScreen from './Screens/InternshipScreen.jsx';
import Screen from './Component/Screen.jsx';
import ListItem from './Component/ListItem.jsx';
import AccountScreen from './Screens/AccountScreen.jsx';

export default function App() {
  return (
    <LoginScreen/>
  )

  }