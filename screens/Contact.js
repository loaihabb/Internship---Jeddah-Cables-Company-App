import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity, Linking} from 'react-native';
import { StyledContainer, InnerContainer, PageTitle, SubTitle, styles } from '../components/styles';

const Contact = () => {

    const socialMediaLinks = [
        {
          id: 1,
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png',
          url: 'https://www.facebook.com/p/شركة-كابلات-جدة-Jeddah-cables-company-100064679050407/',
          caption: 'Facebook',
        },
        {
          id: 2,
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553',
          url: 'https://twitter.com/your_twitter_page',
          caption: 'Twitter',
        },
        {
          id: 3,
          icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png',
          url: 'https://www.youtube.com/your_youtube_channel',
          caption: 'YouTube',
        },
        {
          id: 4,
          icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
          url: 'https://www.linkedin.com/company/jeddah-cables-company',
          caption: 'LinkedIn',
        },
      ];

      const handleSocialMediaPress = (url) => {
        Linking.openURL(url);
      };

    return (
        <StyledContainer>
            <InnerContainer>
                <PageTitle style={{marginBottom: 20}}>CONTACT US</PageTitle>
              
          <SubTitle style={style.sub}>P.O.BOX 31248 JEDDAH 21497, KINGDOM OF SAUDI ARABIA</SubTitle>
          <View style={style.shadowBox}>
            <Text style={style.text}>
              Address: Industrial City Phase III{"\n"}
              Tel: +966 12 6360770{"\n"}
              Fax: +966 12 6364695{"\n"}
              Email: info@cables.energya.com
            </Text>
        </View>
        <PageTitle style={{ marginBottom: 20 }}>CUSTOMER SUPPORT</PageTitle>
          <SubTitle style={style.sub}>Please do not hesitate to contact us with your inquiries or questions.</SubTitle>
          <View style={style.shadowBox}>
            <Text style={style.text}>
              Tel: +966 12 6360770{"\n"}
              Email: jcc-cs@cables.energya.com
            </Text>
        </View>
        <PageTitle style={{ marginBottom: 20 }}>Follow us</PageTitle>
        <View style={styles.rowContainer}>
          {socialMediaLinks.map((link) => (
            <TouchableOpacity key={link.id} onPress={() => handleSocialMediaPress(link.url)} style={style.socialMediaContainer}>
              <Image
                source={{ uri: link.icon }}
                style={style.socialMediaIcon}
              />
              <Text style={styles.caption}>{link.caption}</Text>
            </TouchableOpacity>
          ))}
        </View>
            </InnerContainer>
        </StyledContainer>
    );
}

const style = StyleSheet.create({
  sub: {
    fontSize: 17,
  },
  text: {
    fontSize: 19,
    margin: 5,
    fontWeight: "bold"
  },
  shadowBox: {
    shadowColor: 'black',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.2 )',
    padding: 20 ,
    shadowBox: 10,
    elevation: 5,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "space-around",
    alignItems: "center",
    padding: 6,
  },
  socialMediaIcon: {
    width: 35,
    height: 35,
    margin: 10
  }
})

export default Contact;
