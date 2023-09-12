import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

//import ThreeDModelView from 'react-native-3d-model-view'; // Import the 3D rendering component
import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledButton,
  ButtonText,
  styles,
  Navbar,
  StyledButtonBlue,
} from "../components/styles";

const Cables = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedSubOption, setSelectedSubOption] = useState("");
  const [selectedSubSubOption, setSelectedSubSubOption] = useState("");
  const navigation = useNavigation();
  const [cableProperties, setCableProperties] = useState({
    ratedVoltage: "",
    cores: "",
    wireSize: "",
  });

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
  
  const coresNumber = ["Single Core", "Multicore", "Multicore Control Cables"];
  const conductorType = ["Conductor Type", "Copper", "Aluminum"];
  const insulationType = ["Insulation Type", "PVC", "XLPE", "LSHF"];
  const armorType = ["Armor Type", "SWA", "AWA", "STA", "ATA", "Unarmored"];
  const outerJacketType = ["Outer Jacket Type", "PVC", "LSHF", "HDPE", "Lead and HDPE", "Copper Wires Screen and HDPE"];
  const screenType = ["Screen Type", "CW Screen", "CT Screen"];
  
  const handleShowDetails = () => {
    navigation.navigate("CableDetails", {
      selectedOption,
      selectedSubOption,
      selectedSubSubOption,
    });
  };
  const handleShowDetailsCompare = () => {
    navigation.navigate("CompareCables", {
      selectedOption,
      selectedSubOption,
      selectedSubSubOption,
    });
  };
  const handleSelectOption = (value) => {
    setSelectedOption(value);
    setSelectedSubOption(""); // Reset sub-option when changing the main option
    setSelectedSubSubOption("");
    setCableProperties((prevProperties) => ({
      ...prevProperties,
      ratedVoltage: value,
    }));
  };

  const handleSelectSubOption = (value) => {
    setSelectedSubOption(value);
    setSelectedSubSubOption("");
    setCableProperties((prevProperties) => ({
      ...prevProperties,
      cores: value,
    }));
  };

  const handleSelectSubSubOption = (value) => {
    setSelectedSubSubOption(value);
    setCableProperties((prevProperties) => ({
      ...prevProperties,
      wireSize: value,
    }));
  };
  
  return (
    <StyledContainer>
      <InnerContainer>
        <PageTitle style={{ marginBottom: 10 }}>Our Cables</PageTitle>
        <SubTitle>
          Choose the properties to get the cable
        </SubTitle>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.container}>
            <Text style={styles.title}>Rated Voltage</Text>
            <View style={styles.radioButtonContainer}>
              {options.map((option) => (
                <TouchableOpacity
                  key={option.value}
                  style={styles.radioButton}
                  onPress={() => handleSelectOption(option.value)}
                >
                  <View style={styles.radioButtonInner}>
                    {option.value === selectedOption ? (
                      <View style={styles.radioButtonIcon} />
                    ) : null}
                  </View>
                  <Text
                    style={[
                      styles.radioButtonLabel,
                      option.value === selectedOption && styles.selectedOption,
                    ]}
                  >
                    {option.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            {selectedOption !== "" && (
              <>
                <Text style={styles.title}>Core Number</Text>
                <View style={styles.radioButtonContainer}>
                  {subOptions[selectedOption].map((subOption) => (
                    <TouchableOpacity
                      key={subOption.value}
                      style={styles.radioButton}
                      onPress={() => handleSelectSubOption(subOption.value)}
                    >
                      <View style={styles.radioButtonInner}>
                        {subOption.value === selectedSubOption ? (
                          <View style={styles.radioButtonIcon} />
                        ) : null}
                      </View>
                      <Text
                        style={[
                          styles.radioButtonLabel,
                          subOption.value === selectedSubOption &&
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

            {/* Show sub-sub-options when a sub-option is selected */}
            {selectedSubOption !== "" && (
              <>
                <Text style={styles.title}>Wire Size</Text>
                <View style={styles.radioButtonContainer}>
                  {subSubOptions[selectedSubOption].map((subSubOption) => (
                    <TouchableOpacity
                      key={subSubOption.value}
                      style={styles.radioButton}
                      onPress={() =>
                        handleSelectSubSubOption(subSubOption.value)
                      }
                    >
                      <View style={styles.radioButtonInner}>
                        {subSubOption.value === selectedSubSubOption ? (
                          <View style={styles.radioButtonIcon} />
                        ) : null}
                      </View>
                      <Text
                        style={[
                          styles.radioButtonLabel,
                          subSubOption.value === selectedSubSubOption &&
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
            <ButtonText>Rated Voltage: {cableProperties.ratedVoltage}</ButtonText>
            <ButtonText>Cores: {cableProperties.cores}</ButtonText>
            <ButtonText>Wire Size: {cableProperties.wireSize}</ButtonText>
            {/* Show the "Show Photo" button when a sub-sub-option is selected */}
            {selectedSubSubOption !== "" && (
              <StyledButtonBlue onPress={handleShowDetails}>
                <ButtonText>
                  Photo Of {selectedOption} - {selectedSubOption} - {selectedSubSubOption}
                </ButtonText>
              </StyledButtonBlue>
            )}
            {selectedSubSubOption !== "" && (
              <StyledButtonBlue onPress={handleShowDetailsCompare}>
                <ButtonText>
                  Compare {selectedOption} - {selectedSubOption} - {selectedSubSubOption} 
                </ButtonText>
              </StyledButtonBlue>
            )}
          </View>
        </ScrollView>
      </InnerContainer>
    </StyledContainer>
  );
};

export default Cables;
