import React from 'react'

import { IconButton, Box, Typography, useTheme,  Button } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../../theme.js";

import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";


const Post = () => {
    const [isHovered, setIsHovered] = useState(false);
    const {
        palette: { neutral },
      } = useTheme();


  return (
    <Box width="350">
    <Box
    position="relative"
    onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
    >
        <img
            width="300px"
            height="400px"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGAYkgD8ZK-12QjvLIjcvmb8fHjrk1KNLZVA&usqp=CAU"
            style={{ cursor: "pointer" }}
            alt="post-img"
        />
        <Box
         display={isHovered ? "block" : "none"}
         position="absolute"
         bottom="10%"
         left="0"
         width="100%"
         padding="0 5%"
        >
        <Box display="flex" justifyContent="space-between">
        <Box
              display="flex"
              alignItems="center"
              backgroundColor="#f5f5f5"
              borderRadius="3px"
            >
                <IconButton >
                <RemoveIcon />
              </IconButton>
              <Typography color={shades.primary[300]}>1</Typography>
              <IconButton >
                <AddIcon />
              </IconButton>
            </Box>
         </Box>
        </Box>


    </Box>
    <Box mt="3px">
        <Typography variant="subtitle2" >
        text
        </Typography>
        <Typography>name</Typography>
        <Typography fontWeight="bold">price</Typography>
      </Box>
    </Box>
  )
}

export default Post