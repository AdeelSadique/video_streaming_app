import {
  Text,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend, BiCopyright } from 'react-icons/all';

function Footer() {
  return (
    <Stack
      direction={['column', 'row']}
      bgColor={'blackAlpha.800'}
      minH={'40'}
      p={'4'}
      color={'white'}
    >
      <VStack
        w={'full'}
        borderRight={['none', '1px solid red']}
        justifyContent={'center'}
      >
        <Heading textTransform={'uppercase'} size={'md'}>
          Subscribe for updates
        </Heading>
        <HStack>
          <Input
            focusBorderColor="none"
            border={'none'}
            borderBottom={'1px solid red'}
            borderRadius={'none'}
            placeholder="Email Here"
            textAlign={'center'}
          />
          <Button colorScheme="red" variant={'outline'}>
            <AiOutlineSend size={'20'} />
          </Button>
        </HStack>
      </VStack>
      <VStack
        w={'full'}
        borderRight={['none', '1px solid red']}
        justifyContent={'center'}
      >
        <Heading textTransform={'uppercase'} size={'md'}>
          codewithadii
        </Heading>
        <HStack>
          <BiCopyright />
          <Text>All right received</Text>
        </HStack>
      </VStack>
      <VStack w={'full'}>
        <Heading textTransform={'uppercase'} size={'md'}>
          Follow us
        </Heading>
        <Button variant={'link'} colorScheme="red">
          <a
            href="https://www.linkedin.com/in/adeel-sadique-1aa9431b2/"
            target="blank"
          >
            Linkedin
          </a>
        </Button>
        <Button variant={'link'} colorScheme="red">
          <a href="https://github.com/AdeelSadique" target="blank">
            Github
          </a>
        </Button>
        <Button variant={'link'} colorScheme="red">
          <a href="https://web.facebook.com/adeel.saddique.549" target="blank">
            Facebook
          </a>
        </Button>
        <Button variant={'link'} colorScheme="red">
          <a
            href="https://www.youtube.com/channel/UCWdCaH0MvxMUqA7EyZvgmvg"
            target="blank"
          >
            Youtube
          </a>
        </Button>
      </VStack>
    </Stack>
  );
}

export default Footer;
