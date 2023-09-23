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
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/all';
import axios from 'axios';
import Loader from './Loader';

function Login({ loggedUserFunc }) {
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const [isLogged, setIsLogged] = useState({ title: '', desc: '', status: '' });
  const [loader, setloader] = useState(false);

  const loginFormHandler = e => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const loginSubmitHandler = e => {
    e.preventDefault();
    setloader(true);
    axios
      .post('http://localhost/react-login-system/login', loginForm)
      .then(res => {
        if (res.data.status === 'success') {
          const { data } = res.data;
          loggedUserFunc(data);
          setIsLogged({
            title: 'Successfully logged',
            desc: 'Welcome back..',
            status: 'success',
          });

          setTimeout(() => {
            navigate('/dashboard');
          }, 2000);

          setloader(false);
        } else {
          setloader(false);
          setIsLogged({
            title: res.data.data,
            desc: 'Try again..',
            status: 'error',
          });

          setTimeout(() => {
            setIsLogged({
              status: '',
            });
          }, 5000);
        }
      })
      .catch(error => {
        setloader(false);
        setIsLogged({
          title: error.data.data,
          desc: 'Try again..',
          status: '',
        });

        setTimeout(() => {
          setIsLogged({
            status: 'error',
          });
        }, 5000);
        // console.log(error);
      });
  };

  return (
    <Container maxW={'container.xl'} h={'100vh'}>
      {isLogged.status ? (
        <Alert
          status={`${isLogged.status}`}
          variant={'left-accent'}
          maxW={'400'}
          margin={'auto'}
          top={'8%'}
        >
          <AlertIcon />

          <AlertTitle>{isLogged.title}!</AlertTitle>
          <AlertDescription>{isLogged.desc}</AlertDescription>
        </Alert>
      ) : null}

      {loader ? (
        <Loader />
      ) : (
        <form onSubmit={loginSubmitHandler}>
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
            <Heading textAlign={'center'}>Welcome Back</Heading>
            <Input
              type="text"
              name="email"
              value={loginForm.email}
              onChange={loginFormHandler}
              textAlign={'center'}
              placeholder="XYZ@domain.com"
              focusBorderColor="blackAlpha.400"
              variant={'filled'}
              required
            />

            <InputGroup>
              <Input
                name="password"
                value={loginForm.password}
                onChange={loginFormHandler}
                variant={'filled'}
                type={showPassword ? 'text' : 'password'}
                textAlign={'center'}
                placeholder="Password"
                focusBorderColor="blackAlpha.400"
                required
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

            <Button variant={'link'} alignSelf={'flex-end'}>
              <Link to={'/forget'}>Forget Password</Link>
            </Button>
            <Button colorScheme="red" type="submit">
              Login
            </Button>
            <Text align={'right'}>
              New User?{' '}
              <Button variant={'link'}>
                <Link to={'/signup'}> {''} SignUp</Link>
              </Button>
            </Text>
          </VStack>
        </form>
      )}
    </Container>
  );
}

export default Login;
