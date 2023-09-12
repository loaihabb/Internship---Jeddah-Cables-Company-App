
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

import {
  StyledContainer,
  Navbar,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  ButtonText,
  StyledButton,
  styles,
} from "../components/styles";
import { View } from "react-native";
import BackgroundImage from "../components/BackgroundImage";

import React, { useState, useEffect } from "react";
import { Animated } from "react-native";
const Home = () => {

  const [logoAnim] = useState(new Animated.Value(0)); // Animation value

  const animateLogo = () => {
    Animated.timing(logoAnim, {
        toValue: 1,
        duration: 1000, // Animation time
        useNativeDriver: true,
    }).start();
};

  useEffect(() => {
    animateLogo();
}, []);

  const navigation = useNavigation();

  const handleButtonPressCables = () => {
    navigation.navigate("Cables"); // Route to cables page
  };
  const handleButtonPressAbout = () => {
    navigation.navigate("About"); // Route to About page
  };
  const handleButtonPressPdfs = () => {
    navigation.navigate("Pdfs"); // Route to Downloads page
  };
  const handleButtonPressContact = () => {
    navigation.navigate("Contact"); // Route to Downloads page
  };
  const handleButtonPressProducts = () => {
    navigation.navigate("Products"); // Route to Downloads page
  };
  return (
    <StyledContainer>
      <BackgroundImage />
      <InnerContainer>
        <StatusBar style="white" />
        <Animated.Image
                  source={require('./../assets/Logo.png')}
                  style={[
                    styles.pageLogo, 
                    {
                      transform: [
                        {
                          translateY: logoAnim.interpolate({
                            inputRange: [0, 1],
                            outputRange: [-100, 0],}), 
                        },
                      ],
                    },
                  ]}/>
        <PageTitle>Jeddah Cables Company</PageTitle>
        <SubTitle>Welcome to Jeddah Cables program</SubTitle>
        <View style={styles.rowContainer}>
          <StyledButton onPress={handleButtonPressCables}>
            <ButtonText>See Our Cables</ButtonText>
          </StyledButton>
          <StyledButton onPress={handleButtonPressAbout}>
            <ButtonText>About us</ButtonText>
          </StyledButton>
          <StyledButton onPress={handleButtonPressPdfs}>
            <ButtonText>Documents</ButtonText>
          </StyledButton>
          <StyledButton onPress={handleButtonPressContact}>
            <ButtonText>Contact us</ButtonText>
          </StyledButton>
          <StyledButton onPress={handleButtonPressProducts}>
            <ButtonText>Products</ButtonText>
          </StyledButton>
        </View>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Home;
