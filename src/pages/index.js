import React, { useState } from 'react'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'

import Modal from '../components/dialogs/modal'

const nftLists = [
  {
    id: 1,
    name: 'HAPE #8064',
    type: 'HAPE PRIME',
    image: '/hape.svg',
    alt: 'hape'
  },
  {
    id: 2,
    name: 'HAPE #8064',
    type: 'HAPE PRIME',
    image: '/hape2.svg',
    alt: 'hape'
  },
  {
    id: 3,
    name: 'HAPE #8064',
    type: 'HAPE PRIME',
    image: '/hape3.svg',
    alt: 'hape'
  },
  {
    id: 4,
    name: 'HAPE #8064',
    type: 'HAPE PRIME',
    image: '/hape4.svg',
    alt: 'hape'
  },
  {
    id: 5,
    name: 'HAPE #8064',
    type: 'HAPE PRIME',
    image: '/hape5.svg',
    alt: 'hape'
  },
  {
    id: 6,
    name: 'HAPE #8064',
    type: 'HAPE PRIME',
    image: '/hape6.svg',
    alt: 'hape'
  },
  {
    id: 7,
    name: 'HAPE #8064',
    type: 'HAPE PRIME',
    image: '/hape.svg',
    alt: 'hape'
  },
  {
    id: 8,
    name: 'HAPE #8064',
    type: 'HAPE PRIME',
    image: '/hape.svg',
    alt: 'hape'
  },
  {
    id: 9,
    name: 'HAPE #8064',
    type: 'HAPE PRIME',
    image: '/hape.svg',
    alt: 'hape'
  }
]

const Home = () => {
  const [openModal, setOpenModal] = useState(false)

  const handleClose = () => setOpenModal(false)

  return (
    <>
      <Box
        // mx={'15rem'}
        mb={'5rem'}
        display='flex'
        justifyContent={'center'}
        gap='1.5rem'
        alignItems={'center'}
        flexWrap='wrap'
        sx={{
          mx: { xs: '1rem', sm: '1rem', md: '6rem', lg: '10rem', xl: '15rem' }
        }}
      >
        {nftLists.map(({ id, name, type, image, alt }) => (
          <Box
            key={id}
            // height={'37.6rem'}
            // width='20rem'
            border={'1px solid #D8D8D8'}
            borderRadius={'2.4rem'}
            p='1.5rem'
            sx={{ cursor: 'pointer', ':hover': { background: '#eee', transition: 'ease-in-out .3s' } }}
            onClick={() => setOpenModal(true)}
          >
            <Box
              component={'img'}
              src={image}
              alt={alt}
              sx={{ objectFit: 'cover' }}
            />
            <Box
              display={'flex'}
              justifyContent='space-between'
              alignItems={'center'}
              mt='1rem'
            >
              <Box display={'flex'} flexDirection='column'>
                <Typography
                  component='p'
                  color={'#314EE7'}
                  fontWeight='600'
                  fontSize={'1.3rem'}
                >
                  {name}
                </Typography>
                <Typography component='p' color={'#1E1E1E'} fontSize='0.8rem'>
                  {type}
                </Typography>
              </Box>
              <Box
                height={'2.6rem'}
                width='2.6rem'
                borderRadius={'50%'}
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                sx={{ background: '#314EE7' }}
              >
                <Box component={'img'} src='/nft-icon.svg' alt='nft' />
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Modal openModal={openModal} handleClose={handleClose} />
    </>
  )
}

export default Home
