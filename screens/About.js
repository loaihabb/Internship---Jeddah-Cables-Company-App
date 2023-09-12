import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from "react-native";
import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  SubTitle,
  styles,
} from "../components/styles";


function About() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectOption = (option) => {
    if (selectedOption === option) {
      // Eğer aynı seçeneğe tekrar tıklanırsa, seçimi kaldır
      setSelectedOption(null);
    } else {
      // Seçilen seçeneği ayarla
      setSelectedOption(option);
    }
  };
  const certifications = [
    {
      id: 1,
      url: "http://www.jeddah-cables.com/products/images/logos/1.jpg",
      caption: "",
    },
    {
      id: 2,
      url: "http://www.jeddah-cables.com/products/images/logos/2.jpg",
      caption: "",
    },
    {
      id: 3,
      url: "http://www.jeddah-cables.com/products/images/logos/3.jpg",
      caption: "",
    },
    {
      id: 4,
      url: "http://www.jeddah-cables.com/products/images/logos/4.jpg",
      caption: "",
    },
    {
      id: 5,
      url: "http://www.jeddah-cables.com/products/images/logos/5.jpg",
      caption: "",
    },
    {
      id: 6,
      url: "http://www.jeddah-cables.com/products/images/logos/6.jpg",
      caption: "",
    },
    {
      id: 7,
      url: "http://www.jeddah-cables.com/products/images/logos/7.jpg",
      caption: "",
    },
    {
      id: 8,
      url: "http://www.jeddah-cables.com/products/images/logos/8.jpg",
      caption: "",
    },
    {
        id: 9,
        url: "http://www.jeddah-cables.com/products/images/logos/9.jpg",
        caption: "",
    },
    {
        id: 10,
        url: "http://www.jeddah-cables.com/products/images/logos/10.jpg",
        caption: "",
    },
    {
        id: 11,
        url: "http://www.jeddah-cables.com/products/images/logos/11.jpg",
        caption: "",
    },
    {
        id: 12,
        url: "http://www.jeddah-cables.com/products/images/logos/12.jpg",
        caption: "",
    },
    {
        id: 13,
        url: "http://www.jeddah-cables.com/products/images/logos/14.jpg",
        caption: "",
    },

  ];

  const QualityCertifications = [
    {
      id: 1,
      url: "http://www.jeddah-cables.com/products/images/logos/logo1.png",
      caption: "Photo 1",
    },
    {
      id: 2,
      url: "http://www.jeddah-cables.com/products/images/logos/logo2.png",
      caption: "Photo 2",
    },
    {
      id: 3,
      url: "http://www.jeddah-cables.com/products/images/logos/logo3.png",
      caption: "Photo 3",
    },
]
  return (
    <StyledContainer>
        <PageTitle>About us</PageTitle>
        <ScrollView>
        <View style={style.shadowBox}>
          <View style={{ marginVertical: 10 }}>
            <TouchableOpacity
              onPress={() => handleSelectOption("Introduction")}
            >
              <Text
                style={{...style.text, fontSize: 25, fontWeight: "bold", margin: 10 }}
              >
                Introduction
              </Text>
            </TouchableOpacity>
            {selectedOption === "Introduction" && (
              <View>
                <SubTitle style={{ color: "white" }}>
                  WELCOME TO JEDDAH CABLES COMPANY
                </SubTitle>
                <Text style={{ fontSize: 17}}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jeddah Cables Company was
                  established in 1989 as a startup plant in low voltage Cables.
                  Today there are four major plants with more than 50,000 tons
                  of products and close to 800 employees operating vigorously to
                  serve the community and satisfy customer needs. Our
                  manufacturing facilities include the process machinery from
                  best worldwide companies in the field from highly
                  technological countries, alongside the first vertical
                  vulcanization (VCV) tower (125 m high) in the Kingdom to produce 400 KV Energy Cables.
                  This facility represents a global mark of distinction in the
                  standard of quality for this product. Our range of cable
                  products that includes BW, Control & Instrumentation cables,
                  LV cables, Overhead lines, MV cables up to 36 kV and EHV/HV
                  Cables up to 400 KV serves almost every need of the
                  construction, energy, signal, process, transportation,
                  communication, utilities and oil and gas sectors. Jeddah
                  Cables Company distinct advantage is portrayed in its
                  relentless commitment to highest standards of quality, which
                  is complemented by its superior technical expertise,
                  specialized R&D programs and extensive manufacturing
                  capabilities allowing it to continue to refine and innovate
                  the products that it brings to the market. With more than Two
                  decades of experience in designing and manufacturing complex
                  cable configurations we have successfully supplied leading
                  utility customers like Saudi Electric Company (SEC), DEWA,
                  KAHRAMA, ADDC, ARAMCO, SABIC, Jordanian Utility Companies
                  (JEPCO , EDCO), FEWA and many more. our cables are
                  manufactured to the best international standards (such as IEC,
                  BS, UL, NEC etc) and other utilities specifications.
                </Text>
              </View>
            )}
          </View>
          <View style={{ marginVertical: 10 }}>
            <TouchableOpacity onPress={() => handleSelectOption("Our Vision")}>
              <Text
                style={{ ...style.text, fontSize: 25, fontWeight: "bold", margin: 10 }}
              >
                Our Vision
              </Text>
            </TouchableOpacity>
            {selectedOption === "Our Vision" && (
              <View>
                {/* Burada Our Vision'a ait içeriği gösterebilirsiniz */}
                <Text style={{ fontSize: 17 }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OUR VISION IS TO BECOME A
                  LEADING PLAYER WITH GLOBAL REACH IN THE FIELD OF DISTRIBUTING
                  WIRE & POWERS CABLES.
                </Text>
              </View>
            )}
          </View>
          <View style={{ marginVertical: 10 }}>
            <TouchableOpacity
              onPress={() => handleSelectOption("Our Objective")}
            >
              <Text
                style={{ ...style.text, fontSize: 25, fontWeight: "bold", margin: 10 }}
              >
                Our Objective
              </Text>
            </TouchableOpacity>
            {selectedOption === "Our Objective" && (
              <View>
                {/* Burada Introduction'a ait içeriği gösterebilirsiniz */}
                <Text style={{ fontSize: 17 }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OUR OBJECTIVE IS TO BECOME THE
                  FIRST CHOICE CABLE SUPPLIER & TO HAVE AN INTERNATIONAL PROFILE
                  WITH A GLOBAL REACH.
                </Text>
              </View>
            )}
          </View>
          <View style={{ marginVertical: 10 }}>
            <TouchableOpacity onPress={() => handleSelectOption("Services")}>
              <Text
                style={{ ...style.text, fontSize: 25, fontWeight: "bold", margin: 10 }}
              >
                Services
              </Text>
            </TouchableOpacity>
            {selectedOption === "Services" && (
              <View>
                <SubTitle style={{ fontSize: 14 }}>
                  OVER 30 YEARS OF EXPERIENCE IN THE INDUSTRY
                </SubTitle>
                <Text style={{ fontSize: 17 }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our range of cable products
                  includes building wires, low voltage with copper or aluminium
                  conductor, PVC, XLPE, or LSHF insulated, steel tape or steel
                  wire Armored ; PVC, PE, or LSHF sheathed. In addition, we
                  manufacture overhead lines, control and instrumentation
                  cables. Moreover, we produce medium voltage cables up to 36 kV
                  and High Voltage Cables up to 220 kV with high tech
                  manufacturing equipment and testing.In addition, we produce
                  full spectrum of plastics that includes PVC, XLPE-LV, XLPE-MV,
                  and PE/BL. As well we produce copper rods that supply the
                  domestic and the international market.
                </Text>
              </View>
            )}
          </View>
          <View style={{ marginVertical: 10 }}>
            <TouchableOpacity onPress={() => handleSelectOption("Offices")}>
              <Text
                style={{ ...style.text, fontSize: 25, fontWeight: "bold", margin: 10 }}
              >
                Offices
              </Text>
            </TouchableOpacity>
            {selectedOption === "Offices" && (
              <View>
                <SubTitle style={{ fontSize: 16 }}>
                  JEDDAH CABLES SAUDI ARABIA AND JEDDAH CABLES COMPANY
                </SubTitle>
                <Text style={{ fontSize: 17 }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Energya Cables Saudi Arabia and
                  Jeddah Cables Company had a number of offices that are
                  strategically located within the gulf region (KSA, UAE, Qatar,
                  Bahrain, Oman, Iraq & Jordan) to deal with clients within
                  their zone of influence. These offices are equipped with the
                  latest services to ensure optimum client satisfaction. They
                  are manned by highly qualified personnel that liaise directly
                  with the company headquarters.
                </Text>
              </View>
            )}
          </View>
          <View style={{ marginVertical: 10 }}>
            <TouchableOpacity
              onPress={() => handleSelectOption("Accreditations and Quality")}
            >
              <Text
                style={{ ...style.text, fontSize: 25, fontWeight: "bold", margin: 10 }}
              >
                Accreditations and Quality
              </Text>
            </TouchableOpacity>
            {selectedOption === "Accreditations and Quality" && (
              <View>
                <SubTitle style={{ fontSize: 14 }}>
                  ACCREDITATIONS AND QUALITY CERTIFICATIONS
                </SubTitle>
                <Text style={{ fontSize: 17 }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our products have the following
                  accreditations and quality certifications – KEMA– UL– SASO–
                  SEC, DEWA, SEWA, FEWA, ADWEA, KAHRAMA– ISO 9001 – ISO 45001–
                  ISO 14001– Ministries & Consulting Approvals
                </Text>
                <View style={styles.rowContainer}>
                  {QualityCertifications.map((photo) => (
                    <View key={photo.id} style={styles.photoContainer}>
                      <Image
                        source={{ uri: photo.url }}
                        style={styles.imageabout}
                      />
                      <Text style={styles.caption}>{photo.caption}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}
          </View>
          <View style={{ marginVertical: 10 }}>
            <TouchableOpacity
              onPress={() => handleSelectOption("Certificates")}
            >
              <Text
                style={{...style.text, fontSize: 25, fontWeight: "bold", margin: 10 }}
              >
                Certificates
              </Text>
            </TouchableOpacity>
            {selectedOption === "Certificates" && (
              <View>
                <SubTitle style={{ fontSize: 14 }}>
                  ACCREDITATIONS AND QUALITY CERTIFICATIONS
                </SubTitle>
                <Text style={{ fontSize: 17 }}>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Jeddah Cables/Wires are
                  unleashed in the energy market backed-up with the best and
                  well known certificates around the world – KEMA Netherlands–
                  DEKRA Netherlands– BRE – UL– SASOSystem – Ministry of
                  Education-KSA – Ministry of Defence-KSA – Ministry of
                  Transportation– Ministry of Health – FEWA – Qatar Petrolium –
                  Dar Al Handasa – Khatib & Alami – ABB
                </Text>
                <View style={styles.rowContainer}>
                  {certifications.map((photo) => (
                    <View key={photo.id} style={styles.photoContainer}>
                      <Image
                        source={{ uri: photo.url }}
                        style={styles.imageabout}
                      />
                      <Text style={styles.caption}>{photo.caption}</Text>
                    </View>
                  ))}
                </View>
              </View>
            )}
            </View>
          </View>
        </ScrollView>
    </StyledContainer>
  );
}
const style = StyleSheet.create({
  shadowBox: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    padding: 20 ,
  },
  text:{
    color: "white"
  }
})
export default About;
