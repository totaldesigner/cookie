import { FontIcons } from '../../assets/icons'
import * as Screens from '../../screens'

import * as _ from 'lodash'

export const MainRoutes = [
  {
    id: 'Home',
    title: 'Home',
    icon: FontIcons.article,
    screen: Screens.Home,
    children: [],
  },
  {
    id: 'Search',
    title: 'Search',
    icon: FontIcons.profile,
    screen: Screens.Search,
    children: [],
  },
  {
    id: 'Camera',
    title: 'Camera',
    icon: FontIcons.article,
    screen: Screens.Camera,
    children: [],
  },
  {
    id: 'Edit',
    title: 'Edit',
    icon: FontIcons.article,
    screen: Screens.Edit,
    children: [],
  },
  {
    id: 'Gallery',
    title: 'Gallery',
    icon: FontIcons.article,
    screen: Screens.Gallery,
    children: [],
  },
]

const menuRoutes = _.cloneDeep(MainRoutes)
menuRoutes.unshift({
  id: 'Home',
  title: 'Start',
  screen: Screens.Home,
  children: [],
})

export const MenuRoutes = menuRoutes
