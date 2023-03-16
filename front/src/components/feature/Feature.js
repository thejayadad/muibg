import React from 'react'
import "./feature.css"
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia, Box } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const Feature = () => {

  return (
    <Box

      sx={{
        display: 'flex',
        marginTop: "150px",
        marginLeft: "auto",
        marginRight: "auto",
        background: "orange",
        justifyContent: "center",
        maxWidth: "800px",
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 328,
          height: 328,
        },
      }}
    >
 <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>

        <CardMedia image="https://images.pexels.com/photos/1707819/pexels-photo-1707819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="pic"
        sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }}
      />

          <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>

        <Typography variant="subtitle1" fontWeight="bold" color="#FFF" >
                Note Title
        </Typography>

          <Typography variant="subtitle2" color="gray">
                Title
        <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>

    </CardContent>
</Card>
<Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>

<CardMedia image="https://images.pexels.com/photos/1707819/pexels-photo-1707819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="pic"
sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }}
/>

  <CardContent sx={{ backgroundColor: "#1E1E1E", height: '180px ' }}>

<Typography variant="subtitle1" fontWeight="bold" color="#FFF" >
        Note Title
</Typography>

  <Typography variant="subtitle2" color="gray">
        Title
<CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
</Typography>

</CardContent>
</Card>
<Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>

<CardMedia image="https://images.pexels.com/photos/1707819/pexels-photo-1707819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="pic"
sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }}
/>

  <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>

<Typography variant="subtitle1" fontWeight="bold" color="#FFF" >
        Note Title
</Typography>

  <Typography variant="subtitle2" color="gray">
        Title
<CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
</Typography>

</CardContent>
</Card>
    </Box>
  )
}

export default Feature