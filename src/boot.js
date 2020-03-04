import React from "react";
import * as Expo from "expo";

import App from "./App";
import { useMachine } from '@xstate/react';

import { BootSetupMachine } from './state/boot'

export default function Boot() {
    const [current] = useMachine(BootSetupMachine)


    return current.matches('done') ? <App/> : <Expo.AppLoading />
}
