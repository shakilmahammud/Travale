import { Grid } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { userContext } from "../../App";
import './TravelPlace.css'

const TravelPlace = (props) => {
  const [showPlace,setshowPlace] = useContext(userContext);
  const { title, description, img } = props.place;

  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.5)), url(${img})`,
    backgroundSize: "cover",
    backgroundPosition: "right top",
    backgroundRepeat: "no-repeat",
    backgroundOrigin: "border-box",
    width: "98%",
    
    borderRadius:"10px",
    margin:"2px"
  };
  
  const TravelPlaceHandler=()=>{
    setshowPlace(props.place)
  }
  
  return (
    <Grid item xs={12} md={4}>
      <div className="travelPlace" onClick={TravelPlaceHandler} style={backgroundImageStyle}>
      <h2>
        {title}
      </h2>
    </div>

    </Grid>
  );
};

export default TravelPlace;
