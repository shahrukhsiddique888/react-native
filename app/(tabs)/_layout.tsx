import React from 'react';
import {Tabs} from "expo-router";
import {ImageBackground, View, Text} from "react-native";
import {images} from "@/constants/images";
import {icons} from "@/constants/icons";
import {Image} from "react-native";

const TabIcon = ({focused , icon , title }: any) => {
   if (focused){
    return(
    <ImageBackground
        source={images.highlight}
        className="flex-row w-[108px] min-h-16 mt-4 justify-center   items-center rounded-full overflow-hidden"
    >
        <Image source={icon} tintColor={"#cd6c3d"} className="size-4" />
        <Text className="text-secondary text-base  font-semibold ml-2">{title}</Text>
    </ImageBackground>
    )}
   else{
        return(
            <View className="size-full justify-center items-center mt-4 rounded-full ">
              <Image source={icon} tintColor={"#cd6c3b"} className="size-5 " />
            </View>
        )
    }
}


const _Layout = () => {
    return (
    <Tabs
      screenOptions={{
          tabBarShowLabel: false,
          tabBarItemStyle:{
              width: "100%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
          },
          tabBarStyle: {
              backgroundColor: "#0f0d23",
              borderRadius: 50,
              marginHorizontal: 20,
              marginBottom: 36,
              height: 52,
              position: "absolute",
              overflow: "hidden",
              borderWidth: 1,
              borderColor: "0f0d23",



          }
      }}>
        <Tabs.Screen
            name="index"
            options={{
                headerShown: false ,
                title: 'Home',
                tabBarIcon: ({ focused } ) => (
                    <TabIcon focused={focused}
                             icon ={icons.home}
                             title = "Home"
                    />
                )


            }}/>

        <Tabs.Screen
            name="Profile"
            options={{
                headerShown: false,
                title: 'profile',
                tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused}
                                 icon={icons.person}
                                 title = "Profile"
                        />

                    )

            }}

        />
        <Tabs.Screen
            name="saved"
            options={{
                headerShown: false,
                title: 'saved',
                tabBarIcon: ({ focused }) => (
                        <TabIcon focused={focused}
                                 icon={icons.save}
                                 title = "Saved"
                        />

                   )

            }} />
        <Tabs.Screen
            name="search"
            options={{
                headerShown: false,
                title: 'search',
                tabBarIcon: ({ focused }) => (

                        <TabIcon focused={focused}
                                 icon={icons.search}
                                 title = "search"
                        />

                   )
            }} />
    </Tabs>
    );
};

export default _Layout;
