"use strict";
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Linking
} from "react-native";
import { ENDPOINT } from "./Config";

export default class VideoOverview extends Component {
  constructor() {
    super();
    this.state = {
      videos: []
    };
  }

  async startRecording() {
    this.setState({ recording: true });
    // default to mp4 for android as codec is not set
    const { uri, codec = "mp4" } = await this.camera.recordAsync();
}

stopRecording() {
    this.camera.stopRecording();
}




async startRecording() {
    this.setState({ recording: true });
    // default to mp4 for android as codec is not set
    const { uri, codec = "mp4" } = await this.camera.recordAsync();
    this.setState({ recording: false, processing: true });
    const type = `video/${codec}`;
  
    const data = new FormData();
    data.append("video", {
      name: "mobile-video-upload",
      type,
      uri
    });
  
    try {
      await fetch(ENDPOINT, {
        method: "post",
        body: data
      });
    } catch (e) {
      console.error(e);
    }
  
    this.setState({ processing: false });
  }


  
  async componentWillMount() {
    try {
      const videos = await fetch(ENDPOINT).then(res => res.json());
      this.setState({
        videos: videos
      });
    } catch (e) {
      console.error("error loading videos", e);
    }
  }

  openVideo(id) {
    const url = `${ENDPOINT}/${id}`;

    Linking.openURL(url).catch(err =>
      console.error("An error occurred opening the link", err)
    );
  }

  render() {
    const { videos } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.headline}>Videos</Text>
        {videos.map(({ id }) => (
          <TouchableHighlight
            key={id}
            underlayColor="rgba(200,200,200,0.6)"
            onPress={this.openVideo.bind(this, id)}
          >
            <Text style={styles.videoTile}>Watch #{id}</Text>
          </TouchableHighlight>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start"
  },
  headline: {
    alignSelf: "center",
    fontSize: 18,
    marginTop: 10,
    marginBottom: 30
  },
  videoTile: {
    alignSelf: "center",
    fontSize: 16,
    marginTop: 15
  }
});