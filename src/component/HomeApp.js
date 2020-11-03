import React from 'react'
import NavbarApp from './NavbarApp'
import {Container} from 'reactstrap'
import AcademyApp from './content/Academy'

class HomeApp extends React.Component {
    render(){
        return(
            <Container className="themed-container" fluid="md" >
                <NavbarApp/>
                <AcademyApp/>
            </Container>
        )
    }
}

export default HomeApp;