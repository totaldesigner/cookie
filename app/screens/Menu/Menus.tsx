import * as React from 'react'
import { Image } from 'react-native'
import { FontIcons } from '../../assets/icons'
import * as Routes from '../../config/navigation/routesBuilder'

import { Camera } from '../Camera'
import { Edit } from '../Edit'
import { Gallery } from '../Gallery'
import { Home } from '../Home'
import { Search } from '../Search'

interface MenuProps {
  navigation: any
}

interface MenuState {
  /* */
}

export class HomeMenu extends React.Component<MenuProps, MenuState> {
  static navigationOptions = {
    title: 'Home'.toUpperCase(),
  }
  render() {
    return (
      <Home navigation={this.props.navigation} />
    )
  }
}

export class SearchMenu extends React.Component<MenuProps, MenuState> {
  static navigationOptions = {
    title: 'Social'.toUpperCase(),
  }
  render() {
    return (
      <Search />
    )
  }
}

export class CameraMenu extends React.Component<MenuProps, MenuState> {
  static navigationOptions = {
    title: 'Camera'.toUpperCase(),
  }
  render() {
    return (
      <Camera navigation={this.props.navigation} />
    )
  }
}

export class EditMenu extends React.Component<MenuProps, MenuState> {
  static navigationOptions = {
    title: 'Edit'.toUpperCase(),
  }
  render() {
    return (
      <Edit navigation={this.props.navigation} />
    )
  }
}

export class GalleryMenu extends React.Component<MenuProps, MenuState> {
  static navigationOptions = {
    title: 'Gallery'.toUpperCase(),
  }
  render() {
    return (
      <Gallery />
    )
  }
}
