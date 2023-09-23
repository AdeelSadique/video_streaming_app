import { Stack, VStack, Button, Heading, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import vid from './AAHISTA AAHISTA- (Official Video) Saaj Bhatt - Shoaib Ibrahim - Raaz Dil Humse Uh Na Chupaya Karo.mp4';

function Videos() {
  const [videos, setVideos] = useState(vid);
  return (
    <Stack direction={['column', 'row']} h={'100vh'} mt={'16'}>
      <VStack w={'full'} p={'1'}>
        <video
          autoPlay
          controls
          controlsList="nodownload"
          src={vid}
          style={{ width: '100%' }}
        ></video>
        <Heading>Video Title 1</Heading>
        <Text overflowY={'auto'}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          quas velit, minima deserunt, aliquam incidunt adipisci, error deleniti
          ab ratione eligendi saepe reiciendis! Impedit alias nihil hic dolore
          suscipit eligendi.
        </Text>
      </VStack>
      <VStack w={['full', 'lg']} overflowY={'auto'}>
        <Button w={'full'} colorScheme="red" variant={'ghost'}>
          {videos.slice(15, 50)}
        </Button>
      </VStack>
    </Stack>
  );
}

export default Videos;
