import { Button, Grid } from "@material-ui/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import { placeData } from "../TravaleData/travaleData";
import TravelPlace from "../TravelPlace/TravelPlace";
const TravelSection = () => {
  const [showPlace] = useContext(userContext);
  return (
    <Grid container item xs={12} justify="space-between">
      <Grid item md={6} style={{ padding: "20px 9%", textAlign:"center" }}>

        <h1 style={{ color: "orange", fontSize: "60px" }}>
          {showPlace.title}
        </h1>

        <h5 style={{ color: "white", fontWeight: "500" }}>
          {showPlace.description}
        </h5>

        <Link to="/booking" style={{textDecoration:'none', color:"black"}}>
          <Button style={{background:"orange"}}  variant="contained">Booking</Button>
        </Link>

      </Grid>
      <Grid
        container item md={6}
        justify="center" spacing={1}
        style={{ marginTop: "100px", padding: "5px" }}
      >
        {placeData.map((place) => {
          return <TravelPlace key={place.id} place={place}></TravelPlace>;
        })}
      </Grid>
    </Grid>
  );
};

export default TravelSection;
