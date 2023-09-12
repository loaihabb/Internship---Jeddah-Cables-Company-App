import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  Linking,
  ActivityIndicator,
  Platform,
} from "react-native";
import {
  StyledContainer,
  InnerContainer,
  styles,
  PageTitle,
} from "../components/styles";
import { WebView } from "react-native-webview";


function Pdfs() {
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

  const Downloads = [
    {
      id: 1,
      photo: "http://www.jeddah-cables.com/products/images/download/img.jpg",
      url: "http://www.jeddah-cables.com/products/brochures/Jeddah-Cables-Company-Profile-2012.pdf",
      caption: "Company Profile",
    },
    {
      id: 2,
      photo: "http://www.jeddah-cables.com/products/images/download/img1.jpg",
      url: "http://www.jeddah-cables.com/products/brochures/High-Voltage.pdf",
      caption: "High Voltage",
    },
    {
      id: 3,
      photo: "http://www.jeddah-cables.com/products/images/download/img2.jpg",
      url: "http://www.jeddah-cables.com/products/brochures/High-Voltage.pdf",
      caption: "Medium Voltage",
    },
    {
      id: 4,
      photo: "http://www.jeddah-cables.com/products/images/download/img3.jpg",
      url: "http://www.jeddah-cables.com/products/brochures/Jeddah-Cables-LV-Catalogue.pdf",
      caption: "Low Voltage",
    },
    {
      id: 5,
      photo: "http://www.jeddah-cables.com/products/images/download/img4.jpg",
      url: "http://www.jeddah-cables.com/products/brochures/Jeddah-Cables-LV-Catalogue.pdf",
      caption: "Indoor Cables",
    },
    {
      id: 6,
      photo: "http://www.jeddah-cables.com/products/images/download/img5.jpg",
      url: "http://www.jeddah-cables.com/products/brochures/Jeddah-Cables-OverHead-Line.pdf",
      caption: "Overhead Lines",
    },
    {
      id: 7,
      photo: "http://www.jeddah-cables.com/products/images/download/img6.jpg",
      url: "http://www.jeddah-cables.com/products/brochures/Jeddah-Cables-Control-Cables.pdf",
      caption: "Control Cables",
    },
  ];

  return (
    <StyledContainer>
      <InnerContainer>
        <PageTitle style={{ marginBottom: 15 }}>Downloads</PageTitle>
        <View>
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
        </View>
        <View style={styles.rowContainer}>
          {Downloads.map((pdf) => (
            <TouchableOpacity
              key={pdf.id}
              style={styles.photoContainer}
              onPress={() => handleOpenPdf(pdf.url)}
            >
                <Image source={{ uri: pdf.photo }} style={styles.imagedoc} />
              <Text style={styles.captiondoc}>{pdf.caption}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </InnerContainer>
    </StyledContainer>
  );
}

export default Pdfs;
