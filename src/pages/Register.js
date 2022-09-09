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
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: '75%' })};
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

function Register() {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder='First Name' />
          <Input placeholder='Last Name' />
          <Input placeholder='Email' />
          <Input placeholder='Username' />
          <Input placeholder='Password' />
          <Input placeholder='Confirm Password' />
          <Agreement>
            By creating an account, I consent processing my personal data in
            accodance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
}

export default Register;
