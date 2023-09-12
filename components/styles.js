import styled from "styled-components/native";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native"


//colors
export const Colors = {
    primary: "#ffffff",
    second: "#E5E7EB",
    terriary: "#1F2937",
    darkLight: "#9CA3AF",
    brand : "#6D28D9",
    green : "#10B981",
    red: "#EF4444",
    black: "#000",
    logo : "#EB6E1F",
    blue : "#00529b",
    navbar: "#7C7C7C"
}

const {primary, second, terriary, darkLight, brand, green, red, black, logo, blue, navbar} = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 50px 15px;
    background-color: ${darkLight};
`;
export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;
export const Navbar = styled.View`
    left: 20px;
    top: 60px;
    position: absolute;
`;


export const PageLogo = styled.Image`
    width: 100px;
    height: 105px;
    margin-top: 50px;
    margin-bottom: 20px;
    aspect-ratio: 10/3;
`;

export const PageTitle = styled.Text`
    font-size: 30px;
    padding-top: 40px;
    text-align: center;
    font-weight: bold;
    color: ${blue};
    margin-bottom: 40px;
`;

export const SubTitle = styled.Text`
    font-size: 18px;
    padding-top: 20px;
    font-style: italic;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${primary};
`;

export const LeftIcon = styled.TouchableOpacity`
    left: 15px;
    top: 38px;
    position: absolute;
    z-index: -1;
`;

export const StyledButtonNavbar = styled.TouchableOpacity`
  justify-content: flex-start;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 20px;
    background-color: ${logo};
    border-radius: 7px;
    align-items: center;
    margin: 3px;
    margin-bottom: 10px;
    width: 48%;
`;
export const StyledButtonBlue = styled.TouchableOpacity`
    padding: 20px;
    background-color: ${blue};
    justify-content: center;
    border-radius: 7px;
    margin: 15px 0;
`;

export const ButtonTextNavbar = styled.Text`
    color: ${blue};
    font-size: 16px;
`;

export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 15px;
    font-weight: bold;
    text-align: center;
`;
export const ButtonTextCompare = styled.Text`
    color: ${logo};
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    margin: 30px;
`;

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: 'center',
  },
  pageLogo: {
    alignSelf: "center", 
    marginBottom: 20, 
    borderRadius: 100, 
    resizeMode : "contain",
    width: "100%"
  },
  title: {
    fontSize: 24,
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
    alignItems: 'baseline',
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
  image: {
    width: 380,
    height: 350,
    resizeMode: "contain",
    borderRadius: 100,
    borderTopLeftRadius: 50,  // Yatay yarıçapı
    borderBottomRightRadius: 50, // Dikey yarıçapı
  },
  rowContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
    justifyContent: "space-around",
    alignItems: "center"

  },
  photoContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  imageabout: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  imagedoc: {
    width: 150,
    height: 150,
    borderRadius: 60,
    resizeMode: "contain",
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 10,
    borderRadius: 10,
    margin: -10,
  },
  ImageView:{
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 10,
    width: 150,
    height: 140,
  },
  caption: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  captiondoc: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

