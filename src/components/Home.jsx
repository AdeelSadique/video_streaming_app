import React from 'react';
import { Box, Container, Heading, Image, Text, Stack } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import serviceImg from '../assets/services.png';

function Home() {
  return (
    <Box>
      <MyCarousel />
      <Container minH={'100vh'} p={'8'} maxW={'container.lg'}>
        <Heading
          textTransform={'uppercase'}
          w={'fit-content'}
          m={'auto'}
          borderBottom={'1px solid black'}
        >
          Our Services
        </Heading>

        <Stack
          direction={['column', 'row']}
          h={'full'}
          p={'8'}
          alignItems={'center'}
        >
          <Image src={serviceImg} h={['200', '300']} />
          <Text lineHeight={'2'} letterSpacing={'wider'}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis aspernatur hic illo voluptate nostrum expedita ipsa
            dolores voluptatem corrupti nobis vel dolore ea voluptatibus
            suscipit, atque sunt adipisci officia at.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={'2000'}
    showArrows={false}
    showStatus={false}
    showThumbs={false}
  >
    <Box w={'full'} h={'100vh'}>
      <Image src={img1} />
      <Heading
        textTransform={'uppercase'}
        pos={'absolute'}
        bgColor={'whiteAlpha.700'}
        top={'50%'}
        left={'50%'}
        color={'black'}
        p={'2'}
        w={'fit-content'}
        css={{ transform: 'translate(-50%,-50%)' }}
      >
        Programming is life
      </Heading>
    </Box>
    <Box w={'full'} h={'100vh'}>
      <Image src={img2} />

      <Heading
        textTransform={'uppercase'}
        pos={'absolute'}
        bgColor={'blackAlpha.700'}
        top={'50%'}
        left={'50%'}
        color={'white'}
        p={'2'}
        w={'fit-content'}
        css={{ transform: 'translate(-50%,-50%)' }}
      >
        Gaming is Future
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
