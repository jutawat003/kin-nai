import React from 'react';
import { View, Text, Image } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function AboutScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.headerTitle}>ผู้จัดทำโปรเจกต์</Text>
      
      {/* รูปที่ 1: นาย จุฑาวัฒน์ */}
      <Image 
        source={require('../assets/photo.jpg')} 
        style={globalStyles.aboutImage} 
      />

      {/* รูปที่ 2: นาย สรวิชญ์ */}
      <Image 
        source={require('../assets/photo1.jpg')} 
        style={globalStyles.aboutImage} 
      />
      
      <View style={[globalStyles.card, { padding: 16 }]}>
        <Text style={globalStyles.cardTitle}>สมาชิกกลุ่ม</Text>
        <Text style={globalStyles.cardSub}>1. นาย จุฑาวัฒน์ ศรีศักดา 003</Text>
        <Text style={globalStyles.cardSub}>2. นาย สรวิชญ์ ยาเพ็ชรน้อย 016</Text>
      </View>
    </View>
  );
}