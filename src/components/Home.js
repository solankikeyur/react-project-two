import { Box, Container, Image, Heading, Stack, Text } from '@chakra-ui/react';
import React, {useEffect} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ImageOne from '../assets/img/1.jpg';
import ImageTwo from '../assets/img/3.jpg';
import ImageThree from '../assets/img/2.png';

const Home = () => {
  useEffect(() => {
    document.title="Home";
  }, [])



  return (
    <Box>
      <MyCarousel></MyCarousel>
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          w={'fit-content'}
          textTransform={'uppercase'}
          py="2"
          m="auto"
          borderBottom={'2px solid'}
        >
          Services
        </Heading>

        <Stack
          h={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']}
        >
          <Image src={ImageOne} h={['20', '200']}></Image>
          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['1', '4']}
            textAlign={'center'}
          >
            ontrary to popular belief, Lorem Ipsum is not simply random text. It
            has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={2000}
      showArrows={false}
      showIndicators={false}
      showStatus={false}
      showThumbs={false}
    >
      <Box w="full" h={'100vh'}>
        <Image src={ImageTwo} h="full" w={'full'} objectFit={'cover'}></Image>
      </Box>
      <Box w="full" h={'100vh'}>
        <Image src={ImageOne} h="full" w={'full'} objectFit={'cover'}></Image>
      </Box>
      <Box w="full" h={'100vh'}>
        <Image src={ImageThree} h="full" w={'full'} objectFit={'cover'}></Image>
      </Box>
    </Carousel>
  );
};

export default Home;
