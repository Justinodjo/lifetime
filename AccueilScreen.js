import * as React from "react";
import {useRef,useState} from 'react'
// import 'react-native-reanimated';
import { Text, View, StyleSheet,Image,Dimensions,Animated} from "react-native";
import { ResizeMode,Video } from "expo-av";
// import { Ionicons } from "@expo/vector-icons";
import { FontAwesome,Entypo,EvilIcons,AntDesign } from '@expo/vector-icons';
import VideoPlayer from "expo-video-player";
import getfetchAll from "./fetchingData/posts";

export const MARGIN =25;
export const CARD_HEIGHT=220
export const HEIGHT = CARD_HEIGHT + MARGIN + 2;
const {height:wHeight}=Dimensions.get("window");
const height =wHeight-64
const FullWidth=Dimensions.get("window").width


export class AccueilScreen extends React.Component {
  render(){
    // const [modalVisible, setModalVisible] = useState(false);
  // const video =useRef(null)
  // const secondVideo =useRef(null)
  // const [status, setStatus] = useState(false);
  // const [statussecondVideo, setStatussecondVideo] =useState(false);
  const y=this.props.y
  const index=this.props.index


  const position= Animated.subtract(index * CARD_HEIGHT, y);
  const isDisappearing = - CARD_HEIGHT;
  const isTop =-0;
  const isBottom = height - CARD_HEIGHT;
  const isAppearing = height;


  // React.useEffect=(getApifetchData)=>{
  //   getfetchAll();
  // }

  const translateY=Animated.add(
  y, 
  y.interpolate({
  inputRange: [0, 0.00001 + index * CARD_HEIGHT],
  outputRange: [0, -index * CARD_HEIGHT],
  extrapolateRight:"clamp",
})
);
const scale= position.interpolate({
  inputRange:[isDisappearing,isTop,isBottom,isAppearing],
  outputRange:[0.5,1,1,0.5],
  extrapolate:"clamp",
});
const opacity= position.interpolate({
  inputRange:[isDisappearing,isTop,isBottom,isAppearing],
  outputRange:[0.5,1,1,0.5],
})

  return (
    <Animated.View style={[styles.container_view_handler,{opacity,transform:[{translateY},{scale}]}]} key={index}>
      <View style={styles.container_handler_view_content}>
        <View style={styles.container_handler_view_content_leads}>
          <View style={styles.container_header_view}>
          <Image
            style={styles.tinyImageProfil}
            source={require('../assets/popular5.jpg')}
          />
              <Text style={styles.container_handler_view_content_text}>John Wick</Text>
              <Text style={styles.container_handler_view_content_text_hours}>Posté il y a 9 h</Text>
              <Text style={styles.container_handler_view_content_text_undestands}><FontAwesome name="volume-up" size={15} color="#b6b6c3" /></Text>
              <Text style={styles.container_handler_view_content_text_tenail_count}><AntDesign name="smile-circle" size={15} color="#b6b6c3" /> 8758</Text>
          </View>
          <View style={styles.container_video_handler_view}>
            <VideoPlayer
              style={styles.video}
              // fullscreen={false}
              videoProps={{
                shouldPlay: true,
                resizeMode: ResizeMode.COVER,
                source: {
                  uri: "https://node79-eu.n0c.com:4443/fb/buzekgdx/files/update_file/uploads/lifetime-636b8dcc697003.38690739.mp4",
                  overrideFileExtensionAndroid: 'mp4'
                },
              }}
            />
            <View style={styles.container_title_text}>
                <Text style={styles.container_handler_view_title_content}>Je suis le titre de la vidéo</Text>
                <Text style={styles.container_handler_view_title_content_text} numberOfLines={4}>Les plus rigoureux sont les rigoureux dans l'âme bla peoeuiyuoishbgtgdb jegtn jhygbdjk jshsdhjdb dujedgbdhydbvgdh  hbhdsbhgdjdhb H HJHNDHBJSSGB  NBKKWNHWGHHDIKDHGDGG</Text>
            </View>
          </View>
          <View style={styles.container_header_view_perform}>
              <Text style={styles.container_handler_view_content_text_dero}><EvilIcons name="eye" size={24} color="#b6b6c3" />John Wick</Text>
              <Text style={styles.container_handler_view_content_text_comments}><FontAwesome name="comment-o" size={24} color="#b6b6c3" /></Text>
              <Text style={styles.container_handler_view_content_text_tenail_emoticons}><Entypo name="emoji-happy" size={15} color="#b6b6c3" /> 8758</Text>
          </View>
        </View>
      </View>
    </Animated.View>
  );
  }
};

const styles = StyleSheet.create({
  container_handler_view_content: {
    // flex:1,
    width: "100%",
    height: "100%",
    backgroundColor: "#879546",
    alignItems: "center",
    backgroundColor: "#f7f7f8",
  },
 
  container_handler_view_content_leads: {
    marginTop: 10,
    width: "97%",
    height: "70%",
    borderRadius: 10,
    padding: 10,
    elevation: 10,
    backgroundColor: "#ffffff",
  },
  container_header_view:{
    width:"100%",
    height:"14%",
    borderRaduis:5,
  },

  container_video_handler_view:{
    width:"100%",
    height:"40%",
    top:5,
    borderRaduis:5,
    backgroundColor:"#f0f0f0",
  },
  tinyImageProfil:{
    // flex:1,
    width:35,
    height:35,
    borderRadius:50,
    marginLeft:5,
    backgroundColor:"blue",
  },
  container_handler_view_content_text:{
    marginLeft:45,
    bottom:35,
    fontWeight:"bold",
    fontSize:15,
  },
  container_handler_view_content_text_hours:{
    marginLeft:47,
    bottom:35,
    fontSize:8,
  },
  container_handler_view_content_text_undestands:{
    left:210,
    bottom:63,
    fontSize:6,
  },
  container_handler_view_content_text_tenail_count:{
    left:250,
    bottom:80,
    fontSize:12,
  },
  video:{
    width:290,
    height:115,
    borderRadius:10,
  },
  container_header_view_perform:{
    marginTop:135,
    marginRight:10,
    width:"100%",
    height:"14%",
    borderRaduis:5,
  },
  container_handler_view_content_text_dero:{
    marginLeft:1,
    bottom:15,
    fontSize:12,
  },
  container_handler_view_content_text_comments:{
    marginLeft:150,
    bottom:40,
    fontSize:8,
  },
  container_handler_view_content_text_tenail_emoticons:{
    left:250,
    bottom:60,
    fontSize:12,
  },
  container_title_text:{

  },
  container_handler_view_title_content:{
    fontSize:18,
    justifyContent:"flex-start",
    fontWeight:"800",
    marginTop:5,
  },
  container_handler_view_title_content_text:{
    fontSize:14,
  }
});

export default AccueilScreen;
