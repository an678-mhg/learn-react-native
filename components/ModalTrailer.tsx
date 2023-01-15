import { Modal, View, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Video } from "../types/index.types";
import AntDesign from "react-native-vector-icons/AntDesign";
import VideoIframe from "./Video";

interface ModalTrailerProps {
  visible: boolean;
  handleClose: () => void;
  videos: Video[];
}

export default function ModalTrailer({
  visible,
  handleClose,
  videos,
}: ModalTrailerProps) {
  const [videoIndex, setVideoIndex] = useState(0);

  const nextVideo = () => {
    setVideoIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  const prevVideo = () => {
    setVideoIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.modalContainer}>
        <AntDesign onPress={handleClose} name={"close"} size={30} />
        <VideoIframe
          nextVideo={nextVideo}
          prevVideo={prevVideo}
          item={videos[videoIndex]}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    padding: 16,
    flex: 1,
  },
});
