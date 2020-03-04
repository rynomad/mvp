import React from 'react';
import { Container, Body, Title, Content } from 'native-base'
import {Header} from '../components/ui'
import { PermissionedLocation } from '../components/location'

export default () => (
    <Container>
        <Header 
            title="Location"
        />
        <PermissionedLocation/>
    </Container>
)
