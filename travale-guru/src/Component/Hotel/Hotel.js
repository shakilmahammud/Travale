import React from 'react';
import { Container, Grid } from '@material-ui/core';
import {hotelData} from '../TravaleData/travaleData'
import HotelDetail from '../HotelDetail/HotelDetail';
import Map from '../Map/Map';
import LoginHeader from '../LoginHeader/LoginHeader';
const Hotel = () => {
    return (
        <Container>
           <LoginHeader/>

           <Grid container item xs={12} justify="space-between">

               <Grid item xs={12} md={6}>
                {
                    hotelData.map(hotel=>{
                        return (
                            <HotelDetail hotel={hotel}></HotelDetail>
                        )
                    })
                }
               </Grid>

               <Grid item xs={12} md={6}>
                <Map></Map>
               </Grid>
           </Grid>
        </Container>
    );
};

export default Hotel;