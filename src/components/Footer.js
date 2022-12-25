import React from 'react';
import { Box, Button, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import { AiFillFacebook, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box minH={40} bgColor={'blackAlpha.900'} color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack w={'full'}>
          <Heading
            textTransform={'uppercase'}
            textAlign={'center'}
            py={'4'}
          >
            Project Two
          </Heading>
          <HStack>
          <Button colorScheme={'red'}>
            <AiFillYoutube></AiFillYoutube>
          </Button>
          <Button colorScheme={'facebook'}>
            <AiFillFacebook></AiFillFacebook>
          </Button>
          <Button colorScheme={'linkedin'}>
            <AiFillLinkedin></AiFillLinkedin>
          </Button>
          </HStack>
          
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
