// app/index.tsx
import { StyleSheet } from 'react-native';
import selectHabits from './createPage';
export default function Home() {
  
  return (
    selectHabits()
  );
}

 const heading = StyleSheet.create({
  baseText: {
    fontFamily: 'Outfit',
    fontWeight: 900,
    fontSize: 77,
  }
 })