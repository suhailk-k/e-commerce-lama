import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import styled from 'styled-components';

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Titile = styled.h1`
  font-size: 70px;
  margi-bottom: 20px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px;
`;
const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

function NewsLetter() {
  return (
    <Container>
      <Titile>newsLetter</Titile>
      <Description>communicates</Description>
      <InputContainer>
        <Input placeholder='Your Email' />
        <Button>
          <SendIcon />
        </Button>{' '}
      </InputContainer>
    </Container>
  );
}

export default NewsLetter;
