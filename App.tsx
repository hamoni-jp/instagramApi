import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity,Linking, Platform ,Image} from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as Location from 'expo-location';
import CameraRoll from "@react-native-community/cameraroll";
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';

export default class App extends React.Component {

  onPress = async () => {

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === 'granted') {
      try {
        // const result = await CameraRoll.save(res.uri)
        const result = await ImagePicker.launchImageLibraryAsync();

        console.log("result",result)

        if (!result.cancelled) {
          Linking.openURL(`instagram://library?AssetPath=${encodeURIComponent(result.uri)}`);
          // Linking.openURL(`POST graph.facebook.com/17841400008460056/media ?image_url=${encodeURIComponent(result.uri)} &caption=%23BronzFonz`);

        }

      }
      catch(e){
        console.warn(JSON.stringify(e))
      }
    }
  }

  //   handleGetLatAndLng() {
  //   // Google Maps APIが指定した必須パラメータ(この場合はaddress)をparamsに渡す。
  //   axios
  //     .get(GEOCODE_ENDPOINT, { params: { address: this.state.place } })
  //     .then((results) => {
  //     // 以下のGoogle API のレスポンスの例を元に欲しいデータを取得
  //       const data = results.data;
  //       const result = data.results[0];
  //       const location = result.geometry.location;
  //       this.setState({
  //         address: result.formatted_address,
  //         lat: location.lat,
  //         lng: location.lng,
  //       });
  //     },
  //     )
  //     .catch(() => {
  //       console.log('通信に失敗しました。');
  //     });
  // }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.onPress}>
          <Text>download and getinfo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 44,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});