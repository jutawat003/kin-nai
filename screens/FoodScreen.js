import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const FOOD_DATA = [
  { 
    id: '1', 
    name: 'ร้านริมนา ๙๙', 
    price: '40 - 50 บาท', 
    location: 'ตรงข้ามประตู 2', 
    desc: 'เมนูเยอะ เปลี่ยนเมนูแล้วแต่วัน',
    image: { uri: 'https://scontent.fbkk19-1.fna.fbcdn.net/v/t39.30808-6/514420184_1260876439077979_7211838136868801308_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x810&ctp=s1080x810&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=Jd42lekEVp8Q7kNvwGA7Bof&_nc_oc=Ado4pI8qi3HG_8XT-jEDgDjCXij-A7iIka0A6cNomxB93DEOaix19aBMAVzk17NqQro&_nc_zt=23&_nc_ht=scontent.fbkk19-1.fna&_nc_gid=jvK9zGRTnBJNrwHoV0k5lA&_nc_ss=7b2a8&oh=00_AQNAXa-kjJX315wRQ8hqEP-CVSkpBrIBOkBCm5hqXE2FyA&oe=6AC427FC' }
  },
  { 
    id: '2', 
    name: 'ไอศกรีมสเตชั่น', 
    price: '40 - 120 บาท', 
    location: 'ม.ราชมงคลประตู3 ตรงข้ามหอพักแก้วมงคล ก่อนถึงสะพานดำปากคลอง ราชมงคลสามชุก', 
    desc: 'เปิดอาทิตย์ - ศุกร์ เวลา : 17.00-20.30น.หยุดทุกวันเสาร์โทร.063-697-8559',
    image: { uri: 'https://scontent.fbkk19-1.fna.fbcdn.net/v/t39.30808-6/514254247_122245512188206724_7677157069060424765_n.jpg?stp=dst-jpg_tt6&cstp=mx1200x766&ctp=s1200x766&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2OLww9VE4iQQ7kNvwH5bW6t&_nc_oc=AdqKZ5v_oXRnWijENpwyWEEfvEYfTsb620swRMR53TXMpT05ZKLluvF3jQz-9juTkOw&_nc_zt=23&_nc_ht=scontent.fbkk19-1.fna&_nc_gid=eHTMPm9PTsXXY9ktQ35VbA&_nc_ss=7b2a8&oh=00_AQOijyVB5T_74k55xw4ZVJ2DkfiYgV8czAR97WkVajpGKQ&oe=6AC42F6D' }
  },
];

export default function FoodScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.headerTitle}>ร้านอาหารและร้านของหวานแนะนำ</Text>
      <FlatList
        data={FOOD_DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={globalStyles.card}
            onPress={() => navigation.navigate('Detail', { item })}
          >
            <Image source={item.image} style={globalStyles.cardImage} />
            <View style={globalStyles.cardContent}>
              <Text style={globalStyles.cardTitle}>{item.name}</Text>
              <Text style={globalStyles.cardSub}>📍 {item.location}</Text>
              <View style={globalStyles.badge}>
                <Text style={globalStyles.badgeText}>{item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}