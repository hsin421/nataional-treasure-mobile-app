import React from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';

import Colors from '../constants/Colors';
import {
  ImagePicker,
} from 'exponent';

export default class LinksScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Links',
    },
  }

  showCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({});
  }


  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>

        <TouchableOpacity onPress={this.showCamera} style={styles.button}>
          <Text style={styles.buttonText}>Document Capture</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 3,
    backgroundColor: Colors.tintColor,
    marginRight: 10,
  },
  buttonText: {
    color: '#fff',
  }
});
