import Poppins from '../assets/fonts/poppins-v15-latin-regular.woff'
import Milkshake from '../assets/fonts/milkshake.woff'
import Poppins900 from '../assets/fonts/poppins-v15-latin-900.woff'
import Poppins600 from '../assets/fonts/poppins-v15-latin-600.woff'

export const poppins = {
  fontFamily: 'Poppins',
  src: `
      local('Poppins'),
      local('poppins-v15-latin-regular'),
      url(${Poppins}) format('woff')
    `
}

export const milkshake = {
  fontFamily: 'Milkshake',
  src: `
      local('MilkShake'),
      local('milkshake'),
      url(${Milkshake}) format('woff')
    `
}

export const poppins900 = {
  fontFamily: 'Poppins900',
  src: `
      local('Poppins900'),
      local('poppins900'),
      url(${Poppins900}) format('woff')
    `
}

export const poppins600 = {
  fontFamily: 'Poppins600',
  src: `
      local('Poppins600'),
      local('poppins600'),
      url(${Poppins600}) format('woff')
    `
}
