import React from 'react'
import { Dialog, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import ButtonBase from '../buttons/button-base'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  paper: {
    borderRadius: '24px',
    minHeight: '500px',
    minWidth: '300px',
    [theme.breakpoints.up('md')]: {
      // minHeight: '41rem',
      minWidth: '60rem',
      borderRadius: '24px'
    }
  },
  backDropStyle: {
    backgroundColor: 'rgba(43, 42, 44, 0.85)',
    backdropFilter: 'blur(5px)'
  },
  root: {
    '& .MuiDialog-paper': {
      borderRadius: '24px'
    }
  }
}))

const Modal = ({ openModal, handleClose }) => {
  const classes = useStyles()

  return (
    <Dialog
      className={classes.root}
      PaperProps={{
        className: classes.paper
      }}
      BackdropProps={{
        className: classes.backDropStyle
      }}
      classes={{
        root: classes.root
      }}
      onClose={handleClose}
      open={openModal}
    >
      <Box>
        <Box
          display={'flex'}
          justifyContent='flex-end'
          mt={'0.75rem'}
          mr='0.75rem'
        >
          <Box
            onClick={handleClose}
            height={'2.75rem'}
            width='2.75rem'
            borderRadius={'50%'}
            display='flex'
            sx={{ background: '#FFE7E7', cursor: 'pointer' }}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box component={'img'} src='/close.svg' alt='close' />
          </Box>
        </Box>
        <Box mx={'3.5rem'} mb='3.5rem'>
          <Box
            display={'grid'}
            gridTemplateColumns='1fr 1fr'
            columnGap={'2rem'}
          >
            <Box>
              <Box
                component={'img'}
                src='/image26.svg'
                alt='image26'
                sx={{ objectFit: 'cover' }}
              />
            </Box>
            <Box>
              <Box display={'flex'} justifyContent='space-between'>
                <Box display={'flex'} flexDirection='column'>
                  <Typography
                    component='p'
                    color={'#314EE7'}
                    fontWeight='600'
                    fontSize={'1.3rem'}
                  >
                    HAPE #8064
                  </Typography>
                  <Typography component='p' color={'#1E1E1E'} fontSize='0.8rem'>
                    HAPE PRIME
                  </Typography>
                </Box>
                <Box>2</Box>
              </Box>
              <Box
                display={'flex'}
                justifyContent='space-between'
                alignItems={'center'}
                mt='1.5rem'
              >
                <Box>
                  <Typography
                    component='p'
                    color={'#1E1E1E'}
                    fontSize='1.25rem'
                    fontWeight={'600'}
                  >
                    15.8 ETH
                  </Typography>
                  <Typography
                    component='p'
                    color={'#1E1E1E'}
                    fontSize='0.8rem'
                    fontWeight={'500'}
                  >
                    latest Bid
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    component='p'
                    color={'#1E1E1E'}
                    fontSize='1.25rem'
                    fontWeight={'600'}
                  >
                    9.45 ETH
                  </Typography>
                  <Typography
                    component='p'
                    color={'#1E1E1E'}
                    fontSize='0.8rem'
                    fontWeight={'500'}
                  >
                    from
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    component='p'
                    color={'#1E1E1E'}
                    fontSize='1.25rem'
                    fontWeight={'600'}
                  >
                    $180,345
                  </Typography>
                  <Typography
                    component='p'
                    color={'#1E1E1E'}
                    fontSize='0.8rem'
                    fontWeight={'500'}
                  >
                    +12.45%
                  </Typography>
                </Box>
              </Box>
              <Box
                border={'1px solid #D8D8D8'}
                borderRadius={'24px'}
                padding={'1.25rem'}
                mt={'1.5rem'}
              >
                <Box
                  display={'flex'}
                  alignItems='center'
                  paddingBottom={'1.25rem'}
                  borderBottom='1px solid #D8D8D8'
                >
                  <Box
                    component={'img'}
                    src='/nft-logo.svg'
                    alt='logo'
                    mr='0.5rem'
                    borderRadius={'10px'}
                  />
                  <Box>
                    <Typography
                      component={'p'}
                      color='#1E1E1E'
                      fontWeight={'400'}
                    >
                      CREATED BY
                    </Typography>
                    <Typography
                      component={'p'}
                      color='#FF00E5'
                      fontWeight={600}
                      fontSize='1.25rem'
                    >
                      MutantApeClub
                    </Typography>
                  </Box>
                </Box>
                <Box mt={'1.5rem'} mb={'0.5rem'}>
                  <Typography component={'p'} color='#1E1E1E'>
                    WALLET ID
                  </Typography>
                  <Typography
                    component={'p'}
                    color='#1E1E1E'
                    fontWeight={600}
                    fontSize='1.5rem'
                    sx={{ wordBreak: 'break-all' }}
                  >
                    0xb794f5ea0ba39494ce839613fffba74279579268
                  </Typography>
                </Box>
              </Box>
              <Box display={'flex'} justifyContent='center' mt={'1.5rem'}>
                <ButtonBase
                  text={'Purchase Now'}
                  variant='contained'
                  color={'primary'}
                  component={Link}
                  to='https://opensea.io/'
                  target='_blank'
                  rel='noreferrer'
                  sx={{
                    backgroundColor: '#314EE7'
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Dialog>
  )
}

export default Modal
