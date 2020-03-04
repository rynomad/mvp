import React from 'react';

import { Spinner } from 'native-base'
import { Text } from 'native-base'

import { Action } from './action'
import { PassThrough, ErrorComponent, DeclarativeContainer } from './common'
import { LocationService } from '../state/location';
import { PermissionProvider, Granted as PermissionGranted } from './permission'
import { LOCATION } from 'expo-permissions'

const DefaultInit = () => <Spinner />

const DefaultLocate = () => <Spinner />

const DefaultDisplay = ({ state : {context: {gps}}, actions }) => (
    <>
        <Text>
            {JSON.stringify(gps)}
        </Text>
        <Action
            button='update'
            action={actions.locate}
        />
    </>
)

const DefaultError = ErrorComponent()

export const Init = PassThrough()
export const Locate = PassThrough()
export const Display = PassThrough()
export const _Error = PassThrough()

const components = {
    init: Init,
    locate: Locate,
    display: Display,
    error: _Error
}

const defaults = {
    init: DefaultInit,
    locate: DefaultLocate,
    display: DefaultDisplay,
    error: DefaultError
}

export const Location = ({ children, ...props }) => (
    <DeclarativeContainer
        service={LocationService}
        components={components}
        defaults={defaults}
        {...props}
    >
        {children}
    </DeclarativeContainer>
)

export const PermissionedLocation = ({ children }) => (
    <PermissionProvider permission={LOCATION}>
        <PermissionGranted>
            <Location>
                {children}
            </Location>
        </PermissionGranted>
    </PermissionProvider>
)

export default Location