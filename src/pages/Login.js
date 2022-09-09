import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url('https://img.freepik.com/free-photo/girl-holds-fashion-shopping-bag-beauty_1150-13673.jpg?w=826&t=st=1660117332~exp=1660117932~hmac=3e8ba2526908ff512cffc93c9c8578439ee4dde2a4965373deb0ec8e75765070')
      center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: '75%' })};
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;
const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

function Login() {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder=' username' />
          <Input placeholder='Password' />

          <Button>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Login;
