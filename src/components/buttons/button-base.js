import React from 'react'
import Button from '@mui/material/Button'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  buttonStyle: {
    width: '280px',
    height: '50px',
    borderRadius: '60px !important',
    textTransform: 'none !important'
  }
})

const ButtonBase = ({ text, color, variant, ...props }) => {
  const classes = useStyles()

  return (
    <Button
      className={classes.buttonStyle}
      color={color}
      variant={variant}
      disableElevation
      {...props}
    >
      {text}
    </Button>
  )
}

export default ButtonBase
