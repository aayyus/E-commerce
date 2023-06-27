import { Box, Container } from "@mui/material";
import React from "react";
import { _userCards } from "src/_mock/arrays";
import MainLayout from "src/layouts/main/MainLayout";
import { UserCard } from "src/sections/@dashboard/user/cards";


Shop.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>;

function Shop() {
    
  return (
    
    <Container >
      <h1>Shop</h1>
       
      </Container>
  );
}

export default Shop;
