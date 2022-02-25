import { extendTheme } from '@chakra-ui/react';

export const Button = extendTheme({
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {},
  // default values for `size` and `variant`
  defaultProps: {
    size: '',
    variant: '',
  },
});
