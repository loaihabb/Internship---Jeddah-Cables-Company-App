import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { StyledContainer, PageTitle, StyledButton, ButtonText, ButtonTextCompare, InnerContainer, StyledButtonBlue } from '../components/styles';
import { useNavigation } from '@react-navigation/native';

const CompareCables = ({ navigation, route }) => {
 const { selectedOption, selectedSubOption, selectedSubSubOption } = route.params;
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedSubOption2, setSelectedSubOption2] = useState('');
  const [selectedSubSubOption2, setSelectedSubSubOption2] = useState('');

  const options = [
    { label: "High & Extra High Voltage", value: "High & Extra High Voltage" },
    { label: "Low Voltage", value: "Low Voltage" },
    { label: "Mid Voltage", value: "Mid Voltage" },
    { label: "Overhead Transmission Lines", value: "Overhead Transmission Lines" },
    { label: "Wires", value: "Wires" },
  ];

  const subOptions = {
    "High & Extra High Voltage": [
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "4", value: "4" },
      { label: "5", value: "5" },
      { label: "6", value: "6" },
      { label: "7", value: "7" },
    ],
    "Mid Voltage": [
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "4", value: "4" },
      { label: "5", value: "5" },
      { label: "6", value: "6" },
      { label: "7", value: "7" },
    ],
    "Low Voltage": [
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "4", value: "4" },
      { label: "5", value: "5" },
      { label: "6", value: "6" },
      { label: "7", value: "7" },
    ],
    "Overhead Transmission Lines": [
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "4", value: "4" },
      { label: "5", value: "5" },
      { label: "6", value: "6" },
      { label: "7", value: "7" },
    ],
    "Wires": [
      { label: "1", value: "1" },
      { label: "2", value: "2" },
      { label: "3", value: "3" },
      { label: "4", value: "4" },
      { label: "5", value: "5" },
      { label: "6", value: "6" },
      { label: "7", value: "7" },
    ],
  };

  const subSubOptions = {
    1: [
      { label: "1mm", value: "1mm" },
      { label: "1.5mm", value: "1.5mm" },
      { label: "2mm", value: "2mm" },
      { label: "4mm", value: "4mm" },
      { label: "6mm", value: "6mm" },
      { label: "10mm", value: "10mm" },
      { label: "16mm", value: "16mm" },
      { label: "25mm", value: "25mm" },
      { label: "35mm", value: "35mm" },
      { label: "50mm", value: "50mm" },
      { label: "70mm", value: "70mm" },
    ],
    2: [
      { label: "1mm", value: "1mm" },
      { label: "1.5mm", value: "1.5mm" },
      { label: "2mm", value: "2mm" },
      { label: "4mm", value: "4mm" },
      { label: "6mm", value: "6mm" },
      { label: "10mm", value: "10mm" },
      { label: "16mm", value: "16mm" },
      { label: "25mm", value: "25mm" },
      { label: "35mm", value: "35mm" },
      { label: "50mm", value: "50mm" },
      { label: "70mm", value: "70mm" },
    ],
    3: [
      { label: "1mm", value: "1mm" },
      { label: "1.5mm", value: "1.5mm" },
      { label: "2mm", value: "2mm" },
      { label: "4mm", value: "4mm" },
      { label: "6mm", value: "6mm" },
      { label: "10mm", value: "10mm" },
      { label: "16mm", value: "16mm" },
      { label: "25mm", value: "25mm" },
      { label: "35mm", value: "35mm" },
      { label: "50mm", value: "50mm" },
      { label: "70mm", value: "70mm" },
    ],
    4: [
      { label: "10mm", value: "10mm" },
      { label: "16mm", value: "16mm" },
      { label: "25mm", value: "25mm" },
      { label: "35mm", value: "35mm" },
      { label: "50mm", value: "50mm" },
      { label: "70mm", value: "70mm" },
      { label: "95mm", value: "95mm" },
      { label: "120mm", value: "120mm" },
      { label: "150mm", value: "150mm" },
      { label: "185mm", value: "185mm" },
      { label: "240mm", value: "240mm" },
    ],
    5: [
      { label: "2mm", value: "2mm" },
      { label: "4mm", value: "4mm" },
      { label: "6mm", value: "6mm" },
      { label: "10mm", value: "10mm" },
      { label: "16mm", value: "16mm" },
      { label: "25mm", value: "25mm" },
      { label: "35mm", value: "35mm" },
      { label: "50mm", value: "50mm" },
      { label: "70mm", value: "70mm" },
      { label: "95mm", value: "95mm" },
      { label: "120mm", value: "120mm" },
    ],
    6: [
      { label: "1mm", value: "1mm" },
      { label: "1.5mm", value: "1.5mm" },
      { label: "2mm", value: "2mm" },
      { label: "2.5mm", value: "2.5mm" },
      { label: "4mm", value: "4mm" },
      { label: "6mm", value: "6mm" },
      { label: "10mm", value: "10mm" },
    ],
    7: [
      { label: "1mm", value: "1mm" },
      { label: "1.5mm", value: "1.5mm" },
      { label: "2mm", value: "2mm" },
      { label: "2.5mm", value: "2.5mm" },
      { label: "4mm", value: "4mm" },
      { label: "6mm", value: "6mm" },
      { label: "10mm", value: "10mm" },
    ],
  };

  const handleCompareCables = () => {
    navigation.navigate("ComparedCables", {
        selectedOption,
        selectedSubOption,
        selectedSubSubOption,
        selectedOption2,
        selectedSubOption2,
        selectedSubSubOption2
      });
    
  };
  const handleSelectOption2 = (value) => {
    setSelectedOption2(value);
    setSelectedSubOption2(""); // Reset sub-option when changing the main option
    setSelectedSubSubOption2("");
  };

  const handleSelectSubOption2 = (value) => {
    setSelectedSubOption2(value);
    setSelectedSubSubOption2("");
  };

  const handleSelectSubSubOption2 = (value) => {
    setSelectedSubSubOption2(value);
  };

  return (
    <StyledContainer>
        <InnerContainer>
      <PageTitle style={{ marginBottom: 10 }}>Compare Cables</PageTitle>
      <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>The First Cable</Text>
        <ButtonTextCompare >
            {selectedOption} - {selectedSubOption} - {selectedSubSubOption}
        </ButtonTextCompare>
        <Text style={styles.title}>Select The Second Cable</Text>
        <Text style={styles.subtitle}>Rated Voltage</Text>
            <View style={styles.radioButtonContainer}>
              {options.map((option) => (
                <TouchableOpacity
                  key={option.value}
                  style={styles.radioButton}
                  onPress={() => handleSelectOption2(option.value)}
                >
                  <View style={styles.radioButtonInner}>
                    {option.value === selectedOption2 ? (
                      <View style={styles.radioButtonIcon} />
                    ) : null}
                  </View>
                  {/* Apply the selectedOption style to the Text component if the option is selected */}
                  <Text
                    style={[
                      styles.radioButtonLabel,
                      option.value === selectedOption2 && styles.selectedOption,
                    ]}
                  >
                    {option.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            {selectedOption2 !== "" && (
              <>
                <Text style={styles.subtitle}>Core Number</Text>
                <View style={styles.radioButtonContainer}>
                  {subOptions[selectedOption2].map((subOption) => (
                    <TouchableOpacity
                      key={subOption.value}
                      style={styles.radioButton}
                      onPress={() => handleSelectSubOption2(subOption.value)}
                    >
                      <View style={styles.radioButtonInner}>
                        {subOption.value === selectedSubOption2 ? (
                          <View style={styles.radioButtonIcon} />
                        ) : null}
                      </View>
                      <Text
                        style={[
                          styles.radioButtonLabel,
                          subOption.value === selectedSubOption2 &&
                            styles.selectedOption,
                        ]}
                      >
                        {subOption.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </>
            )}
            {selectedSubOption2 !== "" && (
              <>
                <Text style={styles.subtitle}>Wire Size</Text>
                <View style={styles.radioButtonContainer}>
                  {subSubOptions[selectedSubOption2].map((subSubOption) => (
                    <TouchableOpacity
                      key={subSubOption.value}
                      style={styles.radioButton}
                      onPress={() =>
                        handleSelectSubSubOption2(subSubOption.value)
                      }
                    >
                      <View style={styles.radioButtonInner}>
                        {subSubOption.value === selectedSubSubOption2 ? (
                          <View style={styles.radioButtonIcon} />
                        ) : null}
                      </View>
                      <Text
                        style={[
                          styles.radioButtonLabel,
                          subSubOption.value === selectedSubSubOption2 &&
                            styles.selectedOption,
                        ]}
                      >
                        {subSubOption.label}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </>
            )}
        {selectedSubSubOption2 !== "" && (
          <ButtonTextCompare>{selectedOption2} - {selectedSubOption2} - {selectedSubSubOption2}</ButtonTextCompare>
        )}
        <StyledButton onPress={handleCompareCables}>
          <ButtonText>Compare Two Cables</ButtonText>
        </StyledButton>
        </ScrollView>
      </InnerContainer>
    </StyledContainer>
  );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: 'center',
        padding: 10,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        flexDirection: 'row', // Yatay hizalama için
        justifyContent: 'center', // Başlık ortalanacak
        color: "white",
        margin: 20,
      },
      subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        flexDirection: 'row', // Yatay hizalama için
        justifyContent: 'center', // Başlık ortalanacak
        color: "black"
      },
      radioButtonContainer: {
        flexDirection: 'row', // Change to 'row' to display items horizontally
        justifyContent: 'space-evenly', // To evenly distribute the radio buttons along the row
        width: '100%', // Ensure the container takes full width of its parent
        color: "white",
        marginBottom: 15,
        flexWrap: "wrap",
        padding: 5,
        shadowColor: 'black',
        shadowOffset: { width: 3, height: 4 },
        shadowOpacity: 0.6,
        shadowRadius: 5,
        borderRadius: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.45)',
        padding: 20 ,
    
    },
    selectedOption: {
      color: '#EB6E1F', // You can set any color you prefer for the selected option
      fontWeight: 'bold',
    },
    radioButton: {
        flexDirection: 'row', // To align icon and label side by side
        alignItems: 'center',
        margin: 3,
    },
    radioButtonIcon: {
      width: 10,
      height: 10,
      borderRadius: 4,
      backgroundColor: '#000',
    },
    radioButtonInner: {
      width: 25, 
      height: 25, // Adjust the size of the inner container based on your preference
      borderRadius: 15, 
      borderWidth: 2,
      borderColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 3,
    },
      radioButtonLabel: {
        fontSize: 17,
        color: "white",
      },
});

export default CompareCables;
