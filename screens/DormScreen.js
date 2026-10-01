import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const DORM_DATA = [
  { 
    id: '1', 
    name: 'หอพักแกรนด์พานทอง', 
    price: '2800 บาท/เดือน', 
    location: 'ตรงข้ามม.ราชมงคลสุวรรณภูมิสุพรรณบุรี มีเซเว่นหน้าซอยทางเข้า', 
    desc: 'สิ่งอำนวยความสะดวก เตียงและที่นอนขนาด 5 ฟุต โต๊ะเครื่องแป้ง และ ตู้เสื้อผ้า-ห้องน้ำในตัวFree WI-FI  CCTV  เครื่องซักผ้าและเครื่องอบผ้า Electrolux  ตู้กดน้ำ  เครื่องทำน้ำอุ่น  และตู้เย็น (บริการเสริม)  ลิฟท์  ที่จอดรถยนต์และมอเตอร์ไซต์  ประตูเปิด-ปิดเป็นเวลา',
    image: { uri: 'https://scontent.fbkk19-1.fna.fbcdn.net/v/t39.30808-6/281811783_2253404884834560_7347451061298141292_n.jpg?stp=dst-jpg_tt6&cstp=mx953x960&ctp=s953x960&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=5sgAzI9N8wQQ7kNvwEKeOfW&_nc_oc=AdoYrAY4JqwJu_bhil_QVy7sH5Kh9n7n5jwcWrk3EHh-h32OdFEVJyojLlVWc8jYeCk&_nc_zt=23&_nc_ht=scontent.fbkk19-1.fna&_nc_gid=E7_4iJMejLJDtye3PMtBrw&_nc_ss=7b2a8&oh=00_AQNkz_OS2CuJWdfi6s4umDiPAryDkj2uNyv3jUOpXUl7pA&oe=6AC44533' }
  },
  { 
    id: '2', 
    name: 'หอพักไพลิน', 
    price: 'ห้องแอร์2000/เดือน​ ห้องพัดลม1500/เดือน', 
    location: 'ซอยข้างเซเว่นตรงไปเรื่อยๆจะเจอป้ายหอพักไพลิน', 
    desc: 'เจ้าของใจดีมากๆใกล้มอใกล้เซเว่นเดินเพียงไม่กี่ก้าว ',
    image: { uri: 'https://scontent.fbkk19-1.fna.fbcdn.net/v/t39.30808-6/481226643_1310078876930243_8492107468782534425_n.jpg?stp=cp6_dst-jpg_tt6&cstp=mx2048x1536&ctp=s2048x1536&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=aa7b47&_nc_ohc=1vlCCtcB6LEQ7kNvwFLILAf&_nc_oc=AdoIo8ea4Dn_7PQU1FAmcr9ssJvsTV23DrgiStQF5g06jj1Vs2JCXipg4LHq7kv48Z0&_nc_zt=23&_nc_ht=scontent.fbkk19-1.fna&_nc_gid=7ZSXcIpb50OyMnCoVFH1qA&_nc_ss=7b2a8&oh=00_AQNNultlB31a26KIjfpY35qndGJ84cMhZn0x4dyhXjbfjA&oe=6AC44275' }
  },
];

export default function DormScreen({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.headerTitle}>หอพักนักศึกษาแนะนำ</Text>
      <FlatList
        data={DORM_DATA}
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
              <View style={[globalStyles.badge, { backgroundColor: '#3498DB' }]}>
                <Text style={globalStyles.badgeText}>{item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}