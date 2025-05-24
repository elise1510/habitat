// app/createPage.tsx
import { StyleSheet, Text, View } from 'react-native';
export default function selectHabits() {
  
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style ={heading.baseText}>Start tracking</Text>
    </View>
  );
}

 const heading = StyleSheet.create({
  baseText: {
    fontFamily: 'Outfit',
    fontWeight: 900,
    fontSize: 77,
  }
 })