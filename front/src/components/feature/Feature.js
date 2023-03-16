import React from 'react'
import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { shades } from "../../theme";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";


const Feature = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");

  return (

       <Carousel>
<Box
width="90%"
height="200px"
display="flex"
justifyContent="center"
alignItems="center"
background="#222"


>
    hi
</Box>
<Box
width="90%"
height="200px"
display="flex"
justifyContent="center"
alignItems="center"
backGround="#222"

>

hi
</Box>



    </Carousel>

  )
}

export default Feature