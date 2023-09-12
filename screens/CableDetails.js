import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  StyledContainer,
  PageLogo,
  StyledButton,
  ButtonText,
  StyledButtonBlue,
  PageTitle,
  InnerContainer,
} from "../components/styles";
import { useNavigation } from "@react-navigation/native";
import { imageMappings } from "../components/ImageMappings";
const CableDetails = ({ route }) => {
  const { selectedOption, selectedSubOption, selectedSubSubOption } = route.params;
  const navigation = useNavigation();
  const imagePath =
    imageMappings[selectedOption]?.["Cores"]?.[selectedSubOption]?.[
      selectedSubSubOption
    ];
  const handleButtonPress = () => {
    navigation.navigate("Cables"); // Route to Cables page
  };

  const handleButtonPressCompare = () => {
    navigation.navigate("CompareCables", {
      selectedOption,
      selectedSubOption,
      selectedSubSubOption,
    });
  };
  return (
    <StyledContainer>
      <InnerContainer>
      <View style={styles.container}>
        <PageTitle style={styles.title}>
          Cable for {selectedOption} - {selectedSubOption} - {selectedSubSubOption}
        </PageTitle>
        {imagePath ? <Image source={imagePath} style={styles.image} /> : null}
        <StyledButton style={{marginTop: 30}} onPress={handleButtonPress}>
          <ButtonText >Back to Cables page</ButtonText>
        </StyledButton>
        {selectedSubSubOption !== "" && (
          <StyledButtonBlue onPress={handleButtonPressCompare}>
            <ButtonText>
              Compare {selectedOption} - {selectedSubOption} - {selectedSubSubOption} with another cable
            </ButtonText>
          </StyledButtonBlue>
        )}
      </View>
      </InnerContainer>
    </StyledContainer>
  );
};
//<PageLogo resizeMode="cover" source={require(`./../assets/Cables/Wires/1mm.png`)} />

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 15,
  },
  imageContainer: {
    borderRadius: 10,
    overflow: "scroll", // This ensures the image respects the borderRadius
  },
  image: {
    width: 380,
    height: 350,
    resizeMode: "contain",
    borderRadius: 100,
    borderTopLeftRadius: 50,  // Yatay yarıçapı
    borderBottomRightRadius: 50, // Dikey yarıçapı
  },
});

export default CableDetails;
