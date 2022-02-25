import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Box,
  Grid,
  Flex,
} from '@chakra-ui/react';
import { Item } from 'framer-motion/types/components/Reorder/Item';
import { FC, useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';

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
  {
    id: 5,
    description: 'Blog',
    address: '/blog',
  },
];

const MenuOverLay: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [btnMenu, setBtnMenu] = useState(false);
  return (
    <>
      <Box
        marginRight={'5%'}
        onClick={() => {
          setBtnMenu(!btnMenu);
        }}
      >
        <Button onClick={onOpen}>
          <FaBars size='35px' />
        </Button>
      </Box>
      <Modal isOpen={isOpen} size={'full'} onClose={onClose}>
        <ModalContent
          display={'block'}
          flexDirection='column'
          position={'fixed'}
        >
          <ModalHeader>
            <Box display={'flex'} justifyContent={'space-around'}>
              <Box>Kongon</Box>
              <Box
                display={'flex'}
                w='100vw'
                justifyContent={'flex-end'}
                onClick={onClose}
              >
                <Button
                  marginRight={'5%'}
                  onClick={() => {
                    setBtnMenu(!btnMenu);
                    onClose;
                  }}
                >
                  <FaTimes size={'35px'} />
                </Button>
              </Box>
            </Box>
          </ModalHeader>
          <ModalBody>
            <Box w='100vw' h='80vh'>
              <Box
                h='100%'
                w='95%'
                border={'3px solid'}
                alignContent='center'
                justifyContent={'space-between'}
                display={{ base: 'block', lg: 'flex' }}
              >
                <Box
                  w={{ base: '100%', lg: '45vw' }}
                  display='flex'
                  flexDirection={'column'}
                  justifyContent={'center'}
                  alignItems='center'
                  justifyItems={'center'}
                >
                  {navList.map((item) => {
                    const { id, description, address } = item;
                    return (
                      <Box
                        key={id}
                        display='flex'
                        justifyItems={'center'}
                        onClick={onClose}
                      >
                        <Link href={address} passHref>
                          <ChakraLink _hover={{ textDecoration: 'none' }}>
                            {description}
                          </ChakraLink>
                        </Link>
                      </Box>
                    );
                  })}
                </Box>

                <Box w={{ base: '100%', lg: '45vw' }}>sdfsdf</Box>
              </Box>
            </Box>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MenuOverLay;
