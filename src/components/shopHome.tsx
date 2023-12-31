import { Box, Container } from '@mui/material'
import React from 'react'
import { _userCards } from 'src/_mock/arrays'
import { UserCard } from 'src/sections/@dashboard/user/cards'

function ShopHome() {
  return (
<>
<Container>
    <h1>Shop</h1>
        <Box
          gap={3}
          display="grid"
          gridTemplateColumns={{
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
        >
         {_userCards.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
      </Box>
      </Container>
      </>
  )
}

export default ShopHome