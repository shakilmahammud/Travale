import { Avatar, Container, Grid } from '@material-ui/core'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/Logo-black.png'
import './LoginHeader.css';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import { userContext } from '../../App';

function LoginHeader() {
    const [showPlace,setshowPlace,loggedIn,]=useContext(userContext)
    return (
        <Container className="LoginHeader">
            <Grid>
                <Grid item xs={4}>
                  <Link to="/"><img src={logo} alt="blackLogo"/></Link>
                </Grid>
                <Grid item xs={8}>
                <div className="nav">
                    <Link  to="/NoMatch">News </Link>
                   <Link  to="/NoMatch">Destination</Link>
                  <Link to="/NoMatch">Blog </Link>
                 <Link to="/NoMatch">Contact </Link>
                   </div>
                   {
                    loggedIn? <div className="userLogin"> <Avatar/> <h2>{loggedIn.name}</h2></div>
                    : <>
                       <Link to="/"> <CancelPresentationIcon/> </Link>
                    </>
                }   
                </Grid>
            </Grid>
        </Container>
    )
}

export default LoginHeader
