import * as React from 'react'
import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { FaceDetector, RNCamera } from 'react-native-camera'
import {
  RkCard,
  RkStyleSheet,
} from 'react-native-ui-kitten'

interface CameraProps {
  navigation: any
}

interface CameraState {
  /* */
}

export class Camera extends React.Component<CameraProps, CameraState> {
  static navigationOptions = {
    title: 'Camera'.toUpperCase(),
  }
  private camera

  constructor(props) {
    super(props)
    this.camera = null
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true }
      const data = await this.camera.takePictureAsync(options)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => this.camera = ref}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center', }}>
          <TouchableOpacity
            onPress={this.takePicture}
            style={styles.capture}
          >
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = RkStyleSheet.create(theme => ({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: theme.colors.screen.scroll,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
}))
