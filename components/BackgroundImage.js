import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const BackgroundImage = () => {
  return (
    <Image
      source={require('./../assets/pdfs/HD.jpg')} // Değiştirmeniz gereken kısım
      style={styles.backgroundImage}
    />
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: '110%',
    height: '115%',
    resizeMode: 'cover',
  },
});

export default BackgroundImage;
