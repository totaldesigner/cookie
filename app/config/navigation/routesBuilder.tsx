import * as _ from 'lodash'
import * as React from 'react'
import { Image } from 'react-native'
import { withRkTheme } from 'react-native-ui-kitten'
import { StackNavigator, TabBarBottom, TabNavigator } from 'react-navigation'
import { NavBar } from '../../components'
import {
  MainRoutes,
  MenuRoutes,
} from './routes'
import transition from './transitions'

const main = {}
const flatRoutes = {};
(MenuRoutes).map((route) => {

  const wrapToRoute = (r) => {
    return {
      screen: withRkTheme(r.screen),
      title: r.title,
    }
  }

  flatRoutes[route.id] = wrapToRoute(route)
  main[route.id] = wrapToRoute(route)
  for (const child of route.children) {
    flatRoutes[child.id] = wrapToRoute(child)
  }
})

const ThemedNavBar = withRkTheme(NavBar) as any

const Routes = Object.keys(main).reduce((routes, name) => {
  const stackName = name
  routes[stackName] = {
    name: stackName,
    screen: TabNavigator(flatRoutes, {
      navigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          // const { routeName } = navigation.state;
          // const iconName = `evilicons-${routeName.toLowerCase()}${focused ? '' : ''}`;
          return <Image
            fadeDuration={0}
            source={require('../../assets/icons/iconPlus.png')}
            style={{ height: 20, width: 20 }}
          />
        },
      }),
      animationEnabled: true,
      lazy: true,
      swipeEnabled: true,
      tabBarComponent: TabBarBottom,
      tabBarOptions: {
        showLabel: false,
      },
      tabBarPosition: 'bottom',
    }),
  }
  return routes
}, {})

export const AppRoutes = Routes
export const HomeRoutes = _.find(MainRoutes, { id: 'Home' }).children
export const SearchRoutes = _.find(MainRoutes, { id: 'Search' }).children
export const CameraRoutes = _.find(MainRoutes, { id: 'Camera' }).children
export const EditRoutes = _.find(MainRoutes, { id: 'Edit' }).children
export const GalleryRoutes = _.find(MainRoutes, { id: 'Gallery' }).children
