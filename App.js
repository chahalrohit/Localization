import * as React from 'react';
import {
  I18nManager,
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import I18n from './i18n/locales';

import { Picker, Icon, Button } from 'native-base';

const listLanguage = [
  { label: '🇬🇧', key: 'en' },
  { label: '🇩🇰', key: 'da' },
  { label: '🇮🇳', key: 'hi' },
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      languageSelected: 'en',
      passNotVisible:true,
      setPassSecure:true,
    };
  }
  onChangeLanguage(languageSelected) {
    this.setState({
      languageSelected,
    });
    //this.props.setLanguageUser(value)
    I18n.locale = languageSelected;
    // _storeData(USER_LANGUAGE,value);
  }
  render() {
    // const { languageSelected } = this.state;
    return (
      <ImageBackground
        style={styles.backgroundImage}
        source={require('./images/long_road.png')}>
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always">
          <View style={styles.container}>

            <DropdownLanguage
              language={this.state.languageSelected}
              onChangeLanguage={this.onChangeLanguage.bind(
                this,
              )}></DropdownLanguage>

            <Text style={styles.helloText}>{I18n.t('hello')} </Text>
            <Text style={styles.text}>{I18n.t('sign_in_to_your_account')}</Text>
            <View style={styles.emailContainer}>
              <TextInput
                style={styles.emailInput}
                placeholder={I18n.t('email')}
                placeholderTextColor="white"
                autoCapitalize="none"
              />
              <Icon type="MaterialIcons" name="email" style={styles.userIcon} />
            </View>

            <View style={styles.passContainer}>
              <TextInput
                style={styles.passInput}
                placeholder={I18n.t('password')}
                secureTextEntry={this.state.setPassSecure}
                placeholderTextColor="white"
              />
              <TouchableOpacity
              onPress={() => (
                this.setState({passNotVisible:!this.state.passNotVisible}),
                 this.setState({setPassSecure:!this.state.setPassSecure})
              )}
              >
                <Icon style={styles.passIcon} 
                    name={this.state.passNotVisible ? 'eye' :'eye-with-line'}
                type="Entypo" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={styles.forgot}>
                {I18n.t('forgot_your_password')}
              </Text>
            </TouchableOpacity>

            <Button block style={styles.signinButton}>
              <Text style={styles.signinText}>{I18n.t('sign_in')}</Text>
            </Button>

            <View style={styles.signUpClick}>
              <Text style={styles.dontAccount}>
                {I18n.t('dont_have_an_account')}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Sign Up')}>
                <Text style={styles.signUp}>{I18n.t('sign_up')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      </ImageBackground>
    );
  }
}

class DropdownLanguage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.dropdownLanguage}>
        <Text style={{ width: 70,}}>{I18n.t('language')}: </Text>
        <Picker
          mode="dropdown"
          iosHeader={''}
          style={{ width: undefined, height: 40, }}
          selectedValue={this.props.language}
          onValueChange={this.props.onChangeLanguage.bind(this)}>
          {listLanguage.map((languageItem, i) => {
            return (
              <Picker.Item
                key={i}
                value={languageItem.key}
                label={languageItem.label}
              />
            );
          })}
        </Picker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  dropdownLanguage: {
    width: 110,
    height: 50,
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
  },
  helloText: {
    color: 'white',
    fontSize: 40,
    marginTop: 75,
    textAlign: 'center',
    fontFamily: 'sans-serif',
  },
  text: {
    color: 'white',
    fontSize: 17,
    textAlign: 'center',
    marginTop: 20,
  },
  emailInput: {
    flex: 1,
    paddingLeft: 20,
    fontSize: 15,
    height: 45,
  },
  passInput: {
    flex: 1,
    paddingLeft: 20,
    fontSize: 15,
    height: 45,
  },
  emailContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(242,242,242,0.5)',
    marginTop: 70,
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  passContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(242,242,242,0.5)',
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  userIcon: {
    fontSize: 25,
    paddingRight: 20,
    color: 'white',
  },
  passIcon: {
    fontSize: 27,
    color: 'white',
    paddingRight: 20,
  },
  forgot: {
    color: 'white',
    fontSize: 15,
    marginLeft: 180,
    marginTop: 10,
    fontWeight: 'bold',
  },
  signinButton: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 60,
    height: 55,
    backgroundColor: '#2566ff',
    borderRadius: 5,
  },
  signinText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  socialSignIn: {
    color: '#ffffff',
    fontSize: 15,
    marginTop: 25,
    textAlign: 'center',
  },
  socialContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    alignContent: 'center',
  },
  google: {
    fontSize: 20,
    marginRight: 90,
    color: '#ea4335',
  },
  facebook: {
    fontSize: 20,
    color: '#4867aa',
  },
  twitter: {
    fontSize: 20,
    color: '#50abf1',
    marginLeft: 90,
  },
  signUpClick: {
    flexDirection: 'row',
    marginLeft: 60,
  },
  dontAccount: {
    color: '#ffffff',
    fontSize: 15,
    marginTop: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  signUp: {
    color: '#ffffff',
    fontSize: 15,
    marginTop: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
