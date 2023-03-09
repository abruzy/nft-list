import React from 'react'
import { InputAdornment, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  input: {
    '& .MuiOutlinedInput-root': {
      height: '3rem',
      width: '30rem',
      borderRadius: '100px',
      // border: '1px solid #D9D9D9',
      // padding: '0 1rem',
      fontSize: '1.25rem',
      outline: 'none',
      paddingRight: 0,
      backgroundColor: 'white',
      '& .MuiOutlinedInput-notchedOutline': {
        border: 'none'
      }
    }
  }
})

const NavBar = () => {
  const classes = useStyles()

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
      <Box>
        <form onSubmit={e => e.preventDefault()}>
          <TextField
            placeholder='Type here'
            variant='outlined'
            className={`${classes.input}`}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <Box
                    height={'3rem'}
                    width='7rem'
                    borderRadius={'101.511px'}
                    backgroundColor='#314EE7'
                    display={'flex'}
                    justifyContent='center'
                    alignItems='center'
                    style={{ cursor: 'pointer' }}
                  >
                    <Typography
                      component={'p'}
                      color='#FFFFFF'
                      fontWeight='600'
                    >
                      Search
                    </Typography>
                  </Box>
                </InputAdornment>
              )
            }}
          />
        </form>
      </Box>
    </Box>
  )
}

export default NavBar
