import { useState, useEffect, useRef } from "react";
import { View, Animated, Image, Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Logo: need a png or svg image logo from entreprise
import Logo from "../assets/logo.png";
import Events from "./Events";
import AppTabBar from "./navigation/MyTabBar";
import MyTabBar from "./TopAppContainer";
// import Home from "./Home";
const BGColor = "#4D4A95";

export default function SplashScreen() {
  // SafeArea Value...

  const edges = useSafeAreaInsets();

  // Animation value...
  const starAnimation = useRef(new Animated.Value(0)).current;

  // Scaling Down Both logo and Title...
  const scaleLogo = useRef(new Animated.Value(1)).current;
  const scaleTitle = useRef(new Animated.Value(1)).current;

  // Offset Animation...
  const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const moveTitle = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  // Animating Content...
  const contentTransition = useRef(
    new Animated.Value(Dimensions.get("screen").height)
  ).current;

  // Animation Done...
  useEffect(() => {
    // starting Animation after 500ms...
    setTimeout(() => {
      // Parallel Animation...
      Animated.parallel([
        Animated.timing(starAnimation, {
          // for same height for non safe Area Devices...
          toValue: -Dimensions.get("screen").height + (edges.top + 65),
          useNativeDriver: true,
        }),
        Animated.timing(scaleLogo, {
          // Scaling to 0.35
          toValue: 0.3,
          useNativeDriver: true,
        }),
        Animated.timing(scaleTitle, {
          // Scaling to 0.8
          toValue: 0.8,
          useNativeDriver: true,
        }),
        Animated.timing(moveLogo, {
          // Moving to Right Most
          toValue: {
            x: (Dimensions.get("screen").width / 2) - 35,
            y: Dimensions.get("screen").height / 2 - 5,
          },
          useNativeDriver: true,
        }),
        Animated.timing(moveTitle, {
          // Moving to Right Most
          toValue: {
            x: 0,
            // Since image size is 100...
            y: Dimensions.get("screen").height / 2 - 90,
          },
          useNativeDriver: true,
        }),
        Animated.timing(contentTransition, {
          toValue: 0,
          useNativeDriver: true,
        }),
      ]).start();
    }, 2000);
  });

  // Going to Move Up like Nav Bar...
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Animated.View
        style={{
          flex: 1,
          top:25,
          backgroundColor: BGColor,
          zIndex: 1,
          transform: [{ translateY: starAnimation }],
        }}
      >
        <Animated.View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Animated.Image
            source={Logo}
            style={{
              width: 250,
              height: 100,
              right:10,
              bottom: 20,
              transform: [
                { translateX: moveLogo.x },
                { translateY: moveLogo.y },
                { scale: scaleLogo },
              ],
            }}
          ></Animated.Image>
          <Animated.Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              color: "white",
              transform: [
                { translateX: moveTitle.x },
                { translateY: moveTitle.y },
                { scale: scaleTitle },
              ],
            }}
          >
            LifeTime
          </Animated.Text>
        </Animated.View>
      </Animated.View>
      <Animated.View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0,0,0,0.04)",
          zIndex: 0,
          transform: [{ translateY: contentTransition }],
        }}
      >
        {/* <Home/> */}
        {/* <Events/> */}
        {/* <MyTabBar/> */}
        <TabBarContent/>
      </Animated.View>
    </View>
  );
}
