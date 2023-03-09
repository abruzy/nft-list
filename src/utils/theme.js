import { createTheme, responsiveFontSizes } from '@mui/material/styles'

import { milkshake, poppins, poppins900, poppins600 } from './fonts'

const primaryColor = '#314EE7'
const secondaryColor = '#fd71ac'
const tertiaryColor = '#F7F7F7'
const defaultTheme = createTheme()

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: primaryColor
      },
      secondary: {
        main: secondaryColor
      },
      tertiary: {
        main: tertiaryColor
      }
    },

    typography: {
      fontFamily: 'Poppins, Arial, Milkshake, poppins900, poppins600'
    },

    components: {
      MuiCssBaseline: {
        styleOverrides: {
          '@font-face': [poppins, milkshake, poppins900, poppins600],
          html: {
            WebkitFontSmoothing: 'auto',
            fontSize: '62.5%'
          },
          body: {
            boxSize: 'border-box',
            margin: 0,
            padding: 0,
            backgroundColor: '#ffffff'
          }
        }
        // '@global': {
        //   html: {
        //     WebkitFontSmoothing: 'auto'
        //   },
        //   body: {
        //     backgroundColor: '#ffffff'
        //   }
        // }
      }
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          borderRadius: 10,
          padding: '6px 30px',
          color: primaryColor,
          fontSize: defaultTheme.typography.pxToRem(16)
        },
        outlined: {
          border: '1px solid #101010',
          background: 'transparent',
          color: 'black'
        }
      }
    }
  })
)

export default theme
