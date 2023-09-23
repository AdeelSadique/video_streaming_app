import {
  Container,
  Input,
  VStack,
  Button,
  Heading,
  Text,
  InputGroup,
  InputRightElement,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/all';
import axios from 'axios';
import { Avatar } from '@chakra-ui/react';
import Loader from './Loader';

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isReg, setIsReg] = useState({ title: '', desc: '', status: '' });
  const [loader, setloader] = useState(false);

  const navigate = useNavigate();

  const signUpChangeHandler = e => {
    setSignupForm({ ...signupForm, [e.target.name]: e.target.value });
  };
  const signupHandler = e => {
    e.stopPropagation();
    setloader(true);
    axios
      .post('http://localhost/react-login-system/signupApi', signupForm)
      .then(res => {
        if (res.status === 200 && res.data.status === 'success') {
          setloader(false);
          setIsReg({
            title: res.data.data,
            desc: 'Login please..',
            status: 'success',
          });

          setTimeout(() => {
            navigate('/login');
          }, 3000);
        } else {
          setloader(false);
          setIsReg({
            title: res.data.data,
            desc: 'Try again..',
            status: 'error',
          });
          setTimeout(() => {
            setIsReg({ status: '' });
          }, 5000);
        }
      })
      .catch(error => {
        setloader(false);
        setIsReg({
          title: error.data.data,
          desc: 'Try again..',
          status: 'error',
        });
        setTimeout(() => {
          setIsReg({ status: '' });
        }, 3000);
        // console.log(error);
      });
  };

  return (
    <Container maxW={'container.xl'} h={'100vh'}>
      {isReg.status ? (
        <Alert
          status={`${isReg.status}`}
          variant={'left-accent'}
          maxW={'400'}
          margin={'auto'}
          top={'8%'}
        >
          <AlertIcon />

          <AlertTitle>{isReg.title}!</AlertTitle>
          <AlertDescription>{isReg.desc}</AlertDescription>
        </Alert>
      ) : null}

      {loader ? (
        <Loader />
      ) : (
        <form>
          <VStack
            alignItems={'stretch'}
            p={'8'}
            w={['full', '96']}
            m={'auto'}
            my={'20'}
            spacing={'6'}
            boxShadow={'xl'}
            borderRadius={'16'}
          >
            <Heading textAlign={'center'}>Create Account</Heading>

            <Avatar alignSelf={'center'} />
            <Input
              textAlign={'center'}
              placeholder="Name"
              focusBorderColor="blackAlpha.400"
              variant={'filled'}
              required
              value={signupForm.name}
              name="name"
              onChange={signUpChangeHandler}
            />
            <Input
              type="email"
              textAlign={'center'}
              placeholder="Email"
              focusBorderColor="blackAlpha.400"
              variant={'filled'}
              required
              value={signupForm.email}
              name="email"
              onChange={signUpChangeHandler}
            />
            <InputGroup>
              <Input
                variant={'filled'}
                type={showPassword ? 'text' : 'password'}
                textAlign={'center'}
                placeholder="Password"
                focusBorderColor="blackAlpha.400"
                required
                name="password"
                value={signupForm.password}
                onChange={signUpChangeHandler}
              />
              <InputRightElement w={'12'}>
                <Button
                  onClick={() => setShowPassword(!showPassword)}
                  variant={'unstyled'}
                >
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button colorScheme="red" onClick={signupHandler}>
              Signup
            </Button>
            <Text align={'right'}>
              Already Account?{' '}
              <Button variant={'link'}>
                <Link to={'/login'}> {''} Login</Link>
              </Button>
            </Text>
          </VStack>
        </form>
      )}
    </Container>
  );
}

export default Signup;
