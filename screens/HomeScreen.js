import React from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.headerTitle}>แอปกินไหน อยู่นี่</Text>
      
      <TouchableOpacity 
        style={globalStyles.card} 
        onPress={() => navigation.navigate('FoodTab')}
      >
        <View style={globalStyles.cardContent}>
          <Text style={globalStyles.cardTitle}>🍔 ร้านอร่อยรอบ ม.</Text>
          <Text style={globalStyles.cardSub}>รวมเมนูเด็ดและร้านอาหารราคานักศึกษา</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity 
        style={globalStyles.card} 
        onPress={() => navigation.navigate('DormTab')}
      >
        <View style={globalStyles.cardContent}>
          <Text style={globalStyles.cardTitle}>🏢 แนะนำหอพักนักศึกษา</Text>
          <Text style={globalStyles.cardSub}>รวมหอพักใกล้ ม.</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}