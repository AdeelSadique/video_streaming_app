import {
  Button,
  Divider,
  HStack,
  Input,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { BiSearchAlt } from 'react-icons/bi';
import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        // colorScheme="red"
        variant={'solid'}
        onClick={onOpen}
        zIndex={'overlay'}
      >
        <BiMenuAltLeft size={'25'} />
      </Button>

      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color={'red.600'} />
          <DrawerHeader textTransform={'uppercase'}>codwithadii</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'stretch'}>
              <HStack>
                <Input focusBorderColor="none" />
                <Button colorScheme="red" bgColor={'red.400'} onClick={onClose}>
                  <BiSearchAlt size={'20'} />
                </Button>
              </HStack>
              <Divider />
              <Button colorScheme="red" variant={'ghost'} onClick={onClose}>
                <Link to={'/'}>Home</Link>
              </Button>
              <Button colorScheme="red" variant={'ghost'} onClick={onClose}>
                <Link to={'/videos'}>Videos</Link>
              </Button>
              <Button colorScheme="red" variant={'ghost'} onClick={onClose}>
                <Link to={'/contact'}>Contact US</Link>
              </Button>
              <Button colorScheme="red" variant={'ghost'} onClick={onClose}>
                <Link to={'/about'}>About US</Link>
              </Button>
            </VStack>

            <HStack
              pos={'absolute'}
              bottom={'4'}
              left={'0'}
              width={'full'}
              justifyContent={'space-evenly'}
            >
              <Button onClick={onClose} colorScheme="red">
                <Link to={'/login'}>Login</Link>
              </Button>
              <Button onClick={onClose} colorScheme="red" variant={'outline'}>
                <Link to={'/signup'}>Signup</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
