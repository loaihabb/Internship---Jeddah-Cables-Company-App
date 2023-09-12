import React from 'react'
import { ButtonText, ButtonTextCompare, InnerContainer, StyledContainer } from '../components/styles'
import { imageMappings } from '../components/ImageMappings'
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { PageTitle, styles } from '../components/styles';
function ComparedCables({ route }) {
  const { selectedOption, selectedSubOption, selectedSubSubOption, selectedOption2, selectedSubOption2, selectedSubSubOption2  } = route.params;
  const imagePath1 = imageMappings[selectedOption]?.["Cores"]?.[selectedSubOption]?.[selectedSubSubOption];
  const imagePath2 = imageMappings[selectedOption2]?.["Cores"]?.[selectedSubOption2]?.[selectedSubSubOption2];
  return (
    <StyledContainer>
      <InnerContainer>
        <ScrollView>
      <PageTitle style={{ marginBottom: 10 }}>Compared Cables</PageTitle>
      <View contentContainerStyle={styles.container}>
        <ButtonTextCompare >{selectedOption} - {selectedSubOption} - {selectedSubSubOption}</ButtonTextCompare>
        {imagePath1 ? <Image source={imagePath1} style={styles.image} /> : null}
        <ButtonTextCompare style={{marginTop: 50}}>{selectedOption2} - {selectedSubOption2} - {selectedSubSubOption2}</ButtonTextCompare>
        {imagePath2 ? <Image source={imagePath2} style={styles.image} /> : null}
      </View>
      </ScrollView>
      </InnerContainer>
    </StyledContainer>
  )
}

export default ComparedCables
