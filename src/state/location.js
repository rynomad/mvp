import {Machine} from 'xstate'
import {useMachine} from '@xstate/react'

import {InitState, InvokeState, ErrorState, WaitState} from './common'
import { getCurrentPositionAsync } from 'expo-location'

export const LocationMachine = ({
    id = `gps_${Math.random()}`,
    gpsOptions = {},
} = {}) => Machine({
    id,
    initial: 'init',
    states: {
        init: InitState({
            START: 'locate'
        }),
        locate: InvokeState({
            src: async ({ gpsOptions }) => ({
                gps: await getCurrentPositionAsync(gpsOptions)
            }),
            target: 'display'
        }),
        display: WaitState({
            on: {
                LOCATE: 'locate'
            }
        }),
        error: ErrorState()
    }
}).withContext({
    gpsOptions
})

export const LocationService = (options) => {
    const [state, send] = useMachine(LocationMachine(options))
    const actions = {
        locate: () => send('LOCATE')
    }

    return ({state, actions})
}