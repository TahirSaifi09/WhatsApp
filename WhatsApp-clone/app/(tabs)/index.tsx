import { Image } from 'expo-image';
import { Button, Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';

import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';



export default function HomeScreen() {

  const [active, setActive] = useState("CHATS");
  const chatList = [
    {
      id: 1,
      name: "Emma",
      message: "Hlo",
      image: "https://static3.depositphotos.com/1000951/138/i/450/depositphotos_1380772-stock-photo-profile-of-beautiful-smiling-girl.jpg"
    },
    {
      id: 2,
      name: "Alina",
      message: "Hlo",
      image: "https://i.pinimg.com/736x/29/c9/57/29c9577a4c788e65c212f598ab4886c9.jpg"
    },
    {
      id: 3,
      name: "Akash",
      message: "Kaha ho??",
      image: "https://images.stockcake.com/public/9/0/0/900cdb4c-bc0d-4f8b-9ba1-f861198431af_large/elegant-anime-profile-stockcake.jpg"
    },
    {
      id: 4,
      name: "Luna",
      message: "Hlo",
      image: "https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      id: 5,
      name: "Bronya",
      message: "Hlo",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-EYppRKTu1ptakkdDqjmPnLFeNVlgeYh8bjY1NY-8oMOGd8i1HTGSVsAC6P1y6Eyy6I&usqp=CAU"
    },
    {
      id: 6,
      name: "Amery",
      message: "Where r uh??",
      image: "https://www.ultraupdates.com/wp-content/uploads/2021/06/Girls-Aesthetic-profile-pictures.jpg"
    },
    {
      id: 7,
      name: "Ursula",
      message: "Hlo",
      image: "https://photosly.in/wp-content/uploads/2024/07/girl-dp-9.jpg"
    },
    {
      id: 8,
      name: "Luna",
      message: "Hlo",
      image: "https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      id: 9,
      name: "Bronya",
      message: "Hlo",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa-EYppRKTu1ptakkdDqjmPnLFeNVlgeYh8bjY1NY-8oMOGd8i1HTGSVsAC6P1y6Eyy6I&usqp=CAU"
    },
    {
      id: 10,
      name: "Amery",
      message: "Where r uh??",
      image: "https://www.ultraupdates.com/wp-content/uploads/2021/06/Girls-Aesthetic-profile-pictures.jpg"
    },
    {
      id: 11,
      name: "Ursula",
      message: "Hlo",
      image: "https://photosly.in/wp-content/uploads/2024/07/girl-dp-9.jpg"
    }
  ];

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
        <View style={{ backgroundColor: "#004000", paddingHorizontal: 10, paddingVertical: 6, flex: 1, flexDirection: "row", justifyContent: "space-between", }}>
          <Button onPress={() => setActive("CHATS")} title="CHATS" />
          <Button onPress={() => setActive("STATUS")} title="STATUS" />
          <Button onPress={() => setActive("CALLS")} title="CALLS" />
        </View>
      </View>
      <View style={{ display: "flex", flexDirection: "column", gap: 16, padding: 14 }}>
        {active === "CHATS" && (
          <View style={{height:Dimensions.get("screen").height-244}}>
            <FlatList
              data={chatList}
              renderItem={({ item }) => (
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}>
                  <Image
                    source={{ uri: item.image }}
                    style={{ height: 50, width: 50, borderRadius: 25, marginRight: 10 }}
                  />
                  <View>
                    <Text style={{ fontSize: 15, fontWeight: "500" }}>{item.name}</Text>
                    <Text style={{ color: "gray" }}>{item.message}</Text>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        )}

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
