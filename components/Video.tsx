import { View, Text, StyleSheet, Dimensions } from "react-native";
import React, { useState } from "react";
import { Video as VideoType } from "../types/index.types";
import YoutubeIframe from "react-native-youtube-iframe";

interface VideoProps {
  item: VideoType;
}

export default function Video({ item }: VideoProps) {
  const width = Dimensions.get("window").width;

  return (
    <View>
      <Text style={styles.videoTitle}>{item.name}</Text>
      <YoutubeIframe
        height={(width - 32) / (16 / 9)}
        webViewStyle={{ aspectRatio: 16 / 9, width: "100%", height: "100%" }}
        videoId={item.key}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  videoTitle: {
    fontWeight: "600",
    fontSize: 16,
    marginVertical: 16,
  },
});
