import React, { View , Image} from 'react-native'
import { Navbar, StyledButtonNavbar, ButtonTextNavbar } from './styles'
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
function MyNavbar() {
    const navigation = useNavigation();
    const route = useRoute();
    const shouldShowBackButton = route.name !== 'Home';
    return (
        <Navbar>
        {shouldShowBackButton && (
        <StyledButtonNavbar style={{paddingBottom: 5}} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={45} color="white" margin={5} padding={5}/>
        </StyledButtonNavbar>
      )}
        </Navbar>
    )
}

export default MyNavbar
