import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import Settings from './screens/settings'
import Location from './screens/location'

import { TabBarIcon } from './components/ui'

export default createAppContainer(
    createBottomTabNavigator({
        Location,
        Settings
    }, {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: TabBarIcon(navigation)
        }),
    }),
)
