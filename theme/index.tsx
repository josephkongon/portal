import { extendTheme } from '@chakra-ui/react';
import { Link, Button } from './components';
import { Mycolors } from './foundation';

const theme = extendTheme({
  components: {
    Link,
  },
  colors: {
    primary: '#1E3A28',
    secondary: '3FF6F91',
    warning: '#ffc75f',
    danger: '#C34A36',
  },
});

export { theme };
