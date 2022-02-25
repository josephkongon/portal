import { ComponentStyleConfig, position } from '@chakra-ui/react';

export const Link: ComponentStyleConfig = {
  baseStyle: {
    marginTop: '1rem',
    justifyContent: 'center',
    color: 'primary',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '3rem',

    pos: 'relative',
    _focus: {
      boxShadow: 'nono',
    },
    _focusVisible: {
      outlineColor: 'primary',
    },
    _before: {
      content: '""',
      position: 'absolute',
      width: '0px',
      height: '2px',
      bottom: '-2px',
      left: 0,
      bg: 'black',
      transition: 'all 0.3s ease',
    },
  },
};
