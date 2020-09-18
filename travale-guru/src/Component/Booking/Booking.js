import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import logo from '../../images/Logo.png'
import { userContext } from '../../App';
import {FormGroup, Grid } from '@material-ui/core';
import './Booking.css'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import { useHistory } from 'react-router-dom';
import Search from '../Search/Search';


const Booking = () => {
    const history = useHistory()
    const [showPlace]=useContext(userContext)
    const [from,setFrom]=useState()
    const [to,setTo]=useState()

    const formControler =(event)=>{
        event.preventDefault()
        history.push("/hotel")
    }
    return (
        <div style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${showPlace.img})`,  height:"100vh", backgroundSize:"cover", padding:"0 30px"}}>
            <Header img={logo} color="white"></Header>
            <Search/>
            
            <Grid container item xs={12} style={{color:"white",  marginTop:"40px"}}> 

                <Grid item xs={12} md={6}  style={{padding:"0 40px"}}>
                    <h1 style={{fontSize:"60px"}}>{showPlace.title}</h1>
                    <h5 style={{fontWeight:"500"}}>{showPlace.description}</h5>
                </Grid>

                <Grid item xs={12} md={6} >
                    <form className="booking-form" onSubmit={formControler}>
                        <FormGroup className="form" >
                            <label >Origin</label>
                            <input  type="text" required/>

                            <label >Destination</label>
                            <input  type="text" required/>

                            <div className="datepicker" style={{display:"flex"}}>
                                <div>
                                    <p>From</p>
                                    <DatePicker selected={from} onChange={date => setFrom(date)} required></DatePicker>
                                </div>

                                <div >
                                    <p>To</p>
                                    <DatePicker selected={to} onChange={date => setTo(date)}required></DatePicker>
                                </div>
                            </div>
                                <input type="submit" value="Start Booking"/>   
                        </FormGroup>
                    </form>
                </Grid>

            </Grid>
        </div>
    );
};

export default Booking;