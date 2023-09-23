import {
  Avatar,
  AvatarBadge,
  useDisclosure,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  DrawerBody,
  DrawerCloseButton,
  HStack,
  Button,
  VStack,
  DrawerFooter,
  Heading,
  Container,
  Divider,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Image,
  Text,
  CardHeader,
} from '@chakra-ui/react';
import { React, useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgProfile, RiShareBoxFill } from 'react-icons/all';
import react from '../assets/react.png';
import laravel from '../assets/laravel.png';
import js from '../assets/javascript.png';
import node from '../assets/node.png';

function Dashboard({ loggedUser }) {
  const [user, setUser] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setUser(loggedUser);

    return () => {};
  }, [user, loggedUser]);

  console.log(user);
  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        left={'4'}
        w={'10'}
        h={'10'}
        p={'0'}
        m={'0'}
        borderRadius={'full'}
        colorScheme="red"
        variant={'solid'}
        onClick={onOpen}
        zIndex={'overlay'}
      >
        <CgProfile size={'40'} />
      </Button>
      <DrawerComponent isOpen={isOpen} onClose={onClose} />
      <Container maxW={'full'} minH={'100vh'} p={['2', '8']}>
        <Heading textAlign={'center'} p={'4'}>
          Dashboard
        </Heading>
        <Divider />
        <Heading size={'md'} p={'2'}>
          Skills
        </Heading>

        <Stack
          direction={['column', 'row']}
          spacing={['2', '4']}
          p={'4'}
          justifyContent={'space-between'}
          alignItems={'center'}
          wrap={'wrap'}
        >
          <Card w={['full', '60']} minH={'400'} m={['2', '4']}>
            <CardHeader margin={'auto'}>
              <Image
                src={react}
                boxSize={'180'}
                objectFit={'contain'}
                borderRadius={'md'}
              />
            </CardHeader>
            <CardBody>
              <Heading textAlign={'center'}>React Js</Heading>
              <Text>React is osm framework of Javascript</Text>
            </CardBody>
            <CardFooter marginLeft={'2'} marginRight={'2'}>
              <Button w={'full'} colorScheme="red">
                Checkout <RiShareBoxFill />
              </Button>
            </CardFooter>
          </Card>
          <Card w={['full', '60']} minH={'400'} m={['2', '4']}>
            <CardHeader margin={'auto'}>
              <Image
                src={laravel}
                boxSize={'180'}
                objectFit={'contain'}
                borderRadius={'md'}
              />
            </CardHeader>
            <CardBody>
              <Heading textAlign={'center'}>Laravel</Heading>
              <Text>Laravel is osm framework of PHP</Text>
            </CardBody>
            <CardFooter marginLeft={'2'} marginRight={'2'}>
              <Button w={'full'} colorScheme="red">
                Checkout <RiShareBoxFill />
              </Button>
            </CardFooter>
          </Card>
          <Card w={['full', '60']} minH={'400'} m={['2', '4']}>
            <CardHeader margin={'auto'}>
              <Image
                src={js}
                boxSize={'180'}
                objectFit={'contain'}
                borderRadius={'md'}
              />
            </CardHeader>
            <CardBody>
              <Heading textAlign={'center'}>Javascript</Heading>
              <Text>Javascript is osm programming language</Text>
            </CardBody>
            <CardFooter marginLeft={'2'} marginRight={'2'}>
              <Button w={'full'} colorScheme="red">
                Checkout <RiShareBoxFill />
              </Button>
            </CardFooter>
          </Card>
          <Card w={['full', '60']} minH={'400'} m={['2', '4']}>
            <CardHeader margin={'auto'}>
              <Image
                src={node}
                boxSize={'180'}
                objectFit={'contain'}
                borderRadius={'md'}
              />
            </CardHeader>
            <CardBody>
              <Heading textAlign={'center'}>Node Js</Heading>
              <Text>Node Js is osm framework of Javascript</Text>
            </CardBody>
            <CardFooter marginLeft={'2'} marginRight={'2'}>
              <Button w={'full'} colorScheme="red">
                Checkout <RiShareBoxFill />
              </Button>
            </CardFooter>
          </Card>
        </Stack>
      </Container>
    </>
  );
}

const DrawerComponent = ({ isOpen, onClose }) => (
  <Drawer isOpen={isOpen} onClose={onClose} placement="left">
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton color={'red.600'} />
      <HStack mt={'6'} justifyContent={'space-evenly'}>
        <Avatar src="https://bit.ly/kent-c-dodds" size={'md'} name="Adeel">
          <AvatarBadge bg={'green.500'} boxSize={'4'}></AvatarBadge>
        </Avatar>
        {/* <DrawerHeader >Adeel Sadique</DrawerHeader> */}
        <Heading size={'sm'}>Adeel Sadique</Heading>
      </HStack>
      <DrawerBody>
        <VStack alignItems={'stretch'}>
          <Button variant={'ghost'} colorScheme="red">
            Home
          </Button>
          <Button variant={'ghost'} colorScheme="red">
            Profile
          </Button>
          <Button variant={'ghost'} colorScheme="red">
            Wallet
          </Button>
          <Button variant={'ghost'} colorScheme="red">
            Proggress
          </Button>
          <Button variant={'ghost'} colorScheme="red">
            Courses
          </Button>
          <Button variant={'ghost'} colorScheme="red">
            Setting
          </Button>
          <Button variant={'ghost'} colorScheme="red">
            Help
          </Button>
        </VStack>
      </DrawerBody>
      <DrawerFooter>
        <Button variant={'solid'} colorScheme="red" w={'stretch'}>
          <Link to={'/login'}>Logout</Link>
        </Button>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
);
export default Dashboard;
