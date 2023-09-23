import { Container, Spinner, VStack, Text } from '@chakra-ui/react';
import React from 'react';

const Loader = () => {
  return (
    <Container w={'container.xl'}>
      <VStack h={'100vh'} justifyContent={'center'} alignItems={'center'}>
        <Spinner size={'xl'} color="red.600" />
        <Text>Verifying...</Text>
      </VStack>
    </Container>
  );
};

export default Loader;
