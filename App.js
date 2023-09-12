import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Cables from "./screens/Cables";
import Home from "./screens/Home";
import { StatusBar } from "react-native";
import MyNavbar from "./components/MyNavbar";
import CableDetails from "./screens/CableDetails";
import CompareCables from "./screens/CompareCables";
import ComparedCables from "./screens/ComparedCables";
import About from "./screens/About";
import Pdfs from "./screens/Pdfs";
import Contact from "./screens/Contact";
import Products from "./screens/Products";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Stack.Navigator screenOptions={{ header: () => <MyNavbar /> }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cables" component={Cables} />
        <Stack.Screen name="CableDetails" component={CableDetails} />
        <Stack.Screen name="CompareCables" component={CompareCables} />
        <Stack.Screen name="ComparedCables" component={ComparedCables} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Pdfs" component={Pdfs} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Products" component={Products} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B1B1B1",
    alignItems: "center",
    justifyContent: "center",
  },
});
