import { Modal, View, StyleSheet } from "react-native";
import React from "react";
import { Video } from "../types/index.types";
import AntDesign from "react-native-vector-icons/AntDesign";
import VideoIframe from "./Video";

interface ModalTrailerProps {
  visible: boolean;
  handleClose: () => void;
  video: Video;
}

export default function ModalTrailer({
  visible,
  handleClose,
  video,
}: ModalTrailerProps) {
  return (
    <Modal animationType="slide" visible={visible}>
      <View style={styles.modalContainer}>
        <AntDesign onPress={handleClose} name={"closecircle"} size={30} />
        <VideoIframe item={video} />
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
