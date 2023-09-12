import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Platform,
  Modal,
  Linking,
  ActivityIndicator,
} from "react-native";
import { StyledContainer } from "../components/styles";
import { WebView } from "react-native-webview";

const optionsData = [
  {
    id: "1",
    title: "HIGH AND EXTRA HIGH VOLTAGE",
    subtitle:
      "Jeddah Cables SA has recently inaugurated new EHV/HV plant with the first VCV (Vertical Continuous Vulcanizing) Line in Saudi Arabia. EHV/HV cables are manufactured through true Triple Extrusion process, ensuring the eccentricity of the cable & material uniformity on the conductor is of the highest precision through gravity material flow control.",
    options: ["1 - HV CABLES", "2 - EHV CABLES"],
    pdf: "http://www.jeddah-cables.com/products/brochures/High-Voltage.pdf",
    images: [require("../assets/Products/High-Voltage.jpg")],
  },
  {
    id: "2",
    title: "MEDIUM VOLTAGE",
    subtitle:
      "In Jeddah Cables MV Cables are produced on state of the Art CCV (Continuous Catinary Vulcanization) Line ensuring excellent Electrical properties with higher operating temperatures therefore higher current capacity of the insulated conductors.",
    options: [
      "1 - SINGLE CORE - UNARMOURED",
      "2 - SINGLE CORE - ARMOURED",
      "3 - MULTI-CORE - UNARMOURED",
      "4 - MULTI-CORES - ARMOURED",
    ],
    pdf: "http://www.jeddah-cables.com/products/brochures/High-Voltage.pdf",
    images: [require("../assets/Products/Medium-Voltage.jpg")],
  },
  {
    id: "3",
    title: "LOW VOLTAGE",
    subtitle:
      "Jeddah Cables SA provides a wide range of LV Power Cables based on International and customer’s standards. Our cables provide the best of safety and environment-friendly conditions to users.",
    options: [
      "1 - SINGLE CORE - UNARMOURED",
      "2 - SINGLE CORE - ARMOURED",
      "3 - MULTI-CORES - UNARMOURED",
      "4 - MULTI-CORES - ARMOURED",
    ],
    pdf: "http://www.jeddah-cables.com/products/brochures/High-Voltage.pdf",
    images: [require("../assets/Products/Low-Voltage.jpg")],
  },
  {
    id: "4",
    title: "BUILDING WIRES",
    subtitle:
      "Jeddah Cables SA has fully automated and largest indoor wires manufacturing facility in MENA Region that produces all categories of building wires, which are used for fixed indoor installations inside conduits and within walls.",
    options: ["1 - EASY PULL THHN/THWN", "2 - SURE WIRE NYA", "3 - FLEX WIRES"],
    pdf: "http://www.jeddah-cables.com/products/brochures/High-Voltage.pdf",
    images: [require("../assets/Products/Building-Wires.jpg")],
  },
  {
    id: "5",
    title: "CONTROL CABLES",
    subtitle:
      "Jeddah Cables SA provides a wide range of Control Cables including unarmoured, armoured and copper screen based on International and customer’s standards. which are used for outdoor/indoor installations for transmitting signals and connecting control units in industry.",
    options: ["1 - UNARMORED", "2 - ARMOURED STEEL", "3 - SCREENED COPPER"],
    pdf: "http://www.jeddah-cables.com/products/brochures/High-Voltage.pdf",
    images: [require("../assets/Products/Control-Cables.jpg")],
  },
  {
    id: "6",
    title: "OVERHEAD LINES CABLES",
    subtitle:
      "Jeddah Cables SA extensive line of copper and aluminum aerial lines, including bare and weather resistant insulated conductors, serve the total distribution and transmission needs of electric utilities, rural electric co-ops and the public power market for both traditional and renewable energy sources.",
    options: [
      "1 - BARE COPPER CONDUCTOR",
      "2 - ALUMINIUM CONDUCTORS STEEL REINFORCED (ACSR)",
      "3 - ALL ALUMINIUM ALLOY CONDUCTORS (AAAC)",
      "4 - ALL ALUMINIUM CONDUCTORS (AAC)",
      "5 - HARD DRAWN INSULATED CONDUCTOR",
    ],
    pdf: "http://www.jeddah-cables.com/products/brochures/High-Voltage.pdf",
    images: [require("../assets/Products/Overhead-Lines.jpg")],
  },
];

const Contact = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const handleOpenPdf = (url) => {
    setPdfUrl(url);
    setShowPdfModal(true);
  };

  const handleClosePdf = () => {
    setShowPdfModal(false);
    setPdfUrl("");
  };

  const handleWebViewLoadStart = () => {
    setLoading(true);
  };

  const handleWebViewLoadEnd = () => {
    setLoading(false);
  };

  const handleDownloadPdf = () => {
    if (Platform.OS === "ios") {
      Linking.openURL(pdfUrl);
    }
  };

  const handleOptionPress = (optionId) => {
    setSelectedOption(optionId === selectedOption ? null : optionId);
  };

  return (
    <StyledContainer style={{ paddingLeft: 0, paddingRight: 0 }}>
      <ScrollView style={styles.container}>
        {optionsData.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={styles.optionContainer}
            onPress={() => handleOptionPress(option.id)}
          >
            <View style={styles.optionInner}>
              {option.images.map((image, index) => (
                <Image
                  key={index}
                  source={image}
                  style={[
                    styles.image,
                    selectedOption === option.id && styles.selectedImage,
                  ]}
                  imageStyle={styles.backgroundImage}
                />
              ))}
              <Text style={styles.optionTitle}>{option.title}</Text>
              {selectedOption === option.id && (
                <View style={styles.selectedOptionContent}>
                  <Text style={styles.subtitle}>{option.subtitle}</Text>
                  {option.options.map((opt, index) => (
                    <Text key={index} style={styles.selectedOptionText}>
                      {opt}
                    </Text>
                  ))}
                   <TouchableOpacity
                    onPress={() => handleOpenPdf(option.pdf)}
                    style={styles.downloadButton}
                  >
                    <Text style={styles.downloadButtonText}>Show PDF</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </TouchableOpacity>
        ))}

        <Modal visible={showPdfModal} animationType="slide">
          <TouchableOpacity onPress={handleClosePdf}>
            <Text
              style={{
                fontSize: 20,
                margin: 5,
                marginBottom: 15,
                padding: 25,
                color: "#00529b",
                top: 25,
                fontWeight: "bold",
              }}
            >
              Close PDF
            </Text>
          </TouchableOpacity>
          {loading && <ActivityIndicator size="large" color="black" />}
          <WebView
            source={{ uri: pdfUrl }}
            style={{ flex: 1 }}
            onLoadStart={handleWebViewLoadStart}
            onLoadEnd={handleWebViewLoadEnd}
          />
          {Platform.OS === "ios" && (
            <TouchableOpacity onPress={handleDownloadPdf}>
              <Text
                style={{
                  fontSize: 20,
                  margin: 5,
                  padding: 25,
                  color: "#00529b",
                  fontWeight: "bold",
                }}
              >
                Download
              </Text>
            </TouchableOpacity>
          )}
        </Modal>
      </ScrollView>
    </StyledContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginTop: 60,
  },
  optionContainer: {
    marginVertical: 10,
    minWidth: "100%", // Genişlik ekranın en solundan en sağına kadar
    minHeight: 85,
    borderRadius: 10,
    transitionProperty: "transform",
    transitionDuration: "0.7s ease",
    transform: [{ scaleY: 1 }],
  },
  optionInner: {
    position: "relative", // İçerikleri örtüşmeyi düzenlemek için
    transform: [{ scaleY: 1.1 }],
  },
  optionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
    zIndex: 1,
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 1,
  },
  subtitle: {
    color: "white",
    padding: 5,
  },
  selectedOptionContent: {
    marginVertical: 8,
    marginLeft: 16,
    zIndex: 1,
    shadowColor: "black",
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.6,
    shadowRadius: 5,
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 20,
    shadowBox: 10,
    elevation: 5,
    maxWidth: 380,
    marginBottom: 15,
  },
  selectedOptionText: {
    fontSize: 15,
    marginBottom: 7,
    fontWeight: "400",
    zIndex: 1,
    color: "white",
  },
  image: {
    position: "absolute",
    width: "100%", // Genişlik ekranın en solundan en sağına kadar
    height: 125,
    minHeight: 50,
    resizeMode: "cover",
    zIndex: -1,
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  selectedImage: {
    position: "relative",
    minWidth: "100%", // Genişlik ekranın en solundan en sağına kadar
    borderRadius: 30,
    width: 300,
    height: 200,
  },
  downloadButton: {
    marginTop: 5,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    padding: 8,
    borderRadius: 5,
  },
  downloadButtonText: {
    color: "white",
    textAlign: "center",
  },
});

export default Contact;
