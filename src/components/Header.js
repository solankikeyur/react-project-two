import React from 'react';
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  HStack,
  useDisclosure,
  VStack
} from '@chakra-ui/react';
import { AiOutlineAlignLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const colorScheme = "blue";
  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme={colorScheme}
        onClick={onOpen}
        zIndex={'overlay'}
      >
        <AiOutlineAlignLeft></AiOutlineAlignLeft>
      </Button>

      <Drawer isOpen={isOpen} onClose={onClose} onOpen={onOpen} placement={'left'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Project Two</DrawerHeader>

          <DrawerBody>
            <VStack>
                <Button variant={"ghost"} colorScheme={colorScheme} onClick={onClose}>
                    <Link to="/">Home</Link>
                </Button>
                <Button variant={"ghost"} colorScheme={colorScheme} onClick={onClose}>
                    <Link to="/videos">Videos</Link>
                </Button>
                <Button variant={"ghost"} colorScheme={colorScheme} onClick={onClose}>
                    <Link to="/videos?category=free">Free Videos</Link>
                </Button>
                <Button variant={"ghost"} colorScheme={colorScheme} onClick={onClose}>
                    <Link to="/upload-video">Upload Video</Link>
                </Button>
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <HStack
              bottom={'10'}
              pos={'absolute'}
              left={'0'}
              w={'full'}
              justifyContent={'space-evenly'}
            >
                <Button colorScheme={colorScheme} variant={'solid'}>
                  <Link to="/login" onClick={onClose}>Login</Link>
                </Button>
                <Button colorScheme={colorScheme} variant={'outline'}>
                <Link to="/signup" onClick={onClose}>Signup</Link>
                </Button>
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
