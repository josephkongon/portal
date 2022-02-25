import { Box, Container } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaBars, FaTimes } from 'react-icons/fa';
import MenuOverLay from './MenuOverLay';

const navList = [
  {
    id: 1,
    description: 'Home',
    address: '/',
  },
  {
    id: 2,
    description: 'About',
    address: '/about',
  },
  {
    id: 3,
    description: 'Contact',
    address: '/contact',
  },
  {
    id: 4,
    description: 'Projects',
    address: '/projects',
  },
];
const NavBar: FC = () => {
  const router = useRouter();
  return (
    <Box
      h='5rem'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
    >
      <Box marginLeft='5%' fontSize={'1.5rem'}>
        Logo
      </Box>

      <MenuOverLay />
    </Box>
  );
};
export { NavBar };
