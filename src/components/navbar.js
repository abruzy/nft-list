import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const NavBar = () => {
  return (
    <Box
      display={'flex'}
      justifyContent='space-between'
      alignItems={'center'}
      // mx='15rem'
      // height={'7.3rem'}
      my='3rem'
      backgroundColor={'tertiary.main'}
      borderRadius={'3rem'}
      p='2.2rem 6rem'
      sx={{
        mx: { xs: '1rem', sm: '1rem', md: '6rem', lg: '15rem', xl: '15rem' }
      }}
    >
      <Typography
        component='p'
        color='#314EE7'
        fontWeight='800'
        fontStyle='italic'
        fontSize={'1.3rem'}
      >
        NFTListings
      </Typography>
      <Box>Search</Box>
    </Box>
  )
}

export default NavBar
