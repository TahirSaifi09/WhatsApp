import { Image } from 'expo-image';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function HomeScreen() {
  return (
    <View>
      <View style={{ backgroundColor: "#004000", display: "flex", flexDirection: "row", justifyContent: "space-between", paddingTop: 60, paddingBottom: 20, paddingHorizontal: 10 }}>
        <Text style={{ fontWeight: "600", fontSize: 25, color: "white" }}>
          WhatsApp
        </Text>
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <Feather name="camera" size={24} color="white" />
          <Feather name="search" size={24} color="white" />
          <Entypo name="dots-three-vertical" size={24} color="white" />
        </View>
      </View>
      <View style={{ backgroundColor: "#004000", paddingHorizontal: 10, paddingVertical: 10, display: "flex", flexDirection: "row", alignItems: "center", gap: 4 }}>
        <FontAwesome name="group" size={20} color="white" />
        <View style={{ backgroundColor: "#004000", paddingHorizontal: 10, paddingVertical: 10, flex: 1, flexDirection: "row", justifyContent: "space-between", }}>
          <Text style={{ fontSize: 15, color: "white", fontWeight: "500", }}>CHATS</Text>
          <Text style={{ fontSize: 15, color: "white", fontWeight: "500", }}>STATUS</Text>
          <Text style={{ fontSize: 15, color: "white", fontWeight: "500", }}>CALLS</Text>
        </View>
      </View>
      <View style={{display:"flex", flexDirection:"column", gap:16, padding:14}}>
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <Image source="https://static3.depositphotos.com/1000951/138/i/450/depositphotos_1380772-stock-photo-profile-of-beautiful-smiling-girl.jpg" style={{ height: 50, width: 50, borderRadius: 50 }} />
          <View>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>Emma </Text>
            <Text style={{ color: "gray" }}>Hlo</Text>
          </View>
        </View>
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <Image source="https://i.pinimg.com/736x/29/c9/57/29c9577a4c788e65c212f598ab4886c9.jpg" style={{ height: 50, width: 50, borderRadius: 50 }} />
          <View>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>Alina </Text>
            <Text style={{ color: "gray" }}>Hlo</Text>
          </View>
        </View>
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <Image source="https://images.stockcake.com/public/9/0/0/900cdb4c-bc0d-4f8b-9ba1-f861198431af_large/elegant-anime-profile-stockcake.jpg" style={{ height: 50, width: 50, borderRadius: 50 }} />
          <View>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>Akash </Text>
            <Text style={{ color: "gray" }}>Kaha ho??</Text>
          </View>
        </View>
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <Image source="https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style={{ height: 50, width: 50, borderRadius: 50 }} />
          <View>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>Luna </Text>
            <Text style={{ color: "gray" }}>Hlo</Text>
          </View>
        </View>
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <Image source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-EYppRKTu1ptakkdDqjmPnLFeNVlgeYh8bjY1NY-8oMOGd8i1HTGSVsAC6P1y6Eyy6I&usqp=CAU" style={{ height: 50, width: 50, borderRadius: 50 }} />
          <View>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>Bronya </Text>
            <Text style={{ color: "gray" }}>Hlo</Text>
          </View>
        </View>
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <Image source="https://www.ultraupdates.com/wp-content/uploads/2021/06/Girls-Aesthetic-profile-pictures.jpg" style={{ height: 50, width: 50, borderRadius: 50 }} />
          <View>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>Amery </Text>
            <Text style={{ color: "gray" }}>Where r uh??</Text>
          </View>
        </View>
        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
          <Image source="https://photosly.in/wp-content/uploads/2024/07/girl-dp-9.jpg" style={{ height: 50, width: 50, borderRadius: 50 }} />
          <View>
            <Text style={{ fontSize: 15, fontWeight: "500" }}>Ursula </Text>
            <Text style={{ color: "gray" }}>Hlo</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
