import React from 'react'
import { Badge, Box, IconButton } from "@mui/material";
import { shades } from "../../theme";
import {
    PersonOutline,
    ShoppingBagOutlined,
    MenuOutlined,
    SearchOutlined,
  } from "@mui/icons-material";


const Navbar = () => {
  return (
    <Box
    display="flex"
    alignItems="center"
    width="100%"
    height="60px"
    backgroundColor="#ef383f"
    color="black"
    position="fixed"
    top="0"
    left="0"
    zIndex="1"

    >
    <Box
    width="80%"
    margin="auto"
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    >
        <Box
        sx={{ "&:hover": { cursor: "pointer" } }}
        color={shades.secondary[500]}
        >
            Blog
        </Box>
        <Box
             display="flex"
             justifyContent="space-between"
             columnGap="20px"
             zIndex="2"
        >
 <IconButton sx={{ color: "black" }}>
            <SearchOutlined />
          </IconButton>
          <IconButton sx={{ color: "black" }}>
            <PersonOutline />
          </IconButton>

        </Box>


    </Box>


    </Box>
  )
}

export default Navbar