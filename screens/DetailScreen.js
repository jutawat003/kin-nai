import React from 'react';
import { Text, Image, ScrollView, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function DetailScreen({ route }) {
  const { item } = route.params;

  return (
    <ScrollView style={globalStyles.container}>
      <Image source={item.image} style={globalStyles.detailImage} />
      <Text style={globalStyles.detailTitle}>{item.name}</Text>
      
      <View style={[globalStyles.card, { padding: 12 }]}>
        <Text style={globalStyles.cardSub}>📍 พิกัด: {item.location}</Text>
        <Text style={globalStyles.cardSub}>💵 ราคา/ค่าบริการ: {item.price}</Text>
      </View>
      
      <Text style={globalStyles.detailText}>{item.desc}</Text>
    </ScrollView>
  );
}