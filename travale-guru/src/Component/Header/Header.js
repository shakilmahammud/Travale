import { Button, Container,Avatar  } from '@material-ui/core';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
import logo from '../../images/Logo.png';
import './Header.css'
const Header = () => {
    const [showPlace,setshowPlace,loggedIn,]=useContext(userContext);
    return (
       <Container className="header">
            <div className="menu">
           <div>
                <Link to="/"> 
                    <img style={{height:"40px"}} src={logo} alt=""/>
                </Link>
           </div>
            <div className="header-right" style={{display:"flex", alignItems:"center",}}>
                <Link  to="/NoMatch">News </Link>

                <Link  to="/NoMatch">Destination</Link>

                <Link to="/NoMatch">Blog </Link>

                <Link to="/NoMatch">Contact </Link>
                {
                    loggedIn? <div style={{display:"flex",color:'orange',fontWeight:'bold'}}> <Avatar/> {loggedIn.name}</div> 
                    : <>
                        <Link style={{textDecoration:"none", color:"white"}} to="/login">
                            <Button size="small" style={{background:"orange", color:"white"}}>Login</Button>
                        </Link>
                    </>
                }     
            </div>
        </div>
       </Container>
    );
};

export default Header;