import { Container } from '@material-ui/core'
import React from 'react'
import './NoMatch.css'

function NoMatch() {
    return (
        <Container>
            <div className="notMatch">
            <h1>404</h1>
            <h3>Page Not found</h3>
            </div>
        </Container>
    )
}

export default NoMatch
