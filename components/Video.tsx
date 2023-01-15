import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Video as VideoType } from "../types/index.types";
import YoutubeIframe from "react-native-youtube-iframe";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

interface VideoProps {
  item: VideoType;
  nextVideo: () => void;
  prevVideo: () => void;
}

export default function Video({ item, nextVideo, prevVideo }: VideoProps) {
  const width = Dimensions.get("window").width;

  return (
    <View>
      <Text style={styles.videoTitle}>{item.name}</Text>
      <YoutubeIframe
        height={(width - 32) / (16 / 9)}
        webViewStyle={{ aspectRatio: 16 / 9, width: "100%", height: "100%" }}
        videoId={item.key}
      />
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity onPress={prevVideo} style={styles.videoButton}>
          <Text style={styles.videoText}>Prev</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={nextVideo} style={styles.videoButton}>
          <Text style={styles.videoText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  videoTitle: {
    fontWeight: "600",
    fontSize: 16,
    marginVertical: 16,
  },
  videoButton: {
    marginTop: 16,
    backgroundColor: "#DBE3FF",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 4,
    width: "45%",
    justifyContent: "center",
    alignItems: "center",
  },
  videoText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#92ABEB",
  },
});
