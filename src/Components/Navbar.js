import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile } from '../responsive';
import { Link } from 'react-router-dom';

const Container = styled.div`
  height: 60px;
  ${mobile({ height: '50px' })};
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: '10px 0px' })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Launguage = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: 'none' })};
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  align-items: center;
  margin-left: 25px;
  display: flex;
  padding: 5px;
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })};
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '24px' })};
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: 'center' })};
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })};
`;

function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Launguage>EN</Launguage>
          <SearchContainer>
            <Input placeholder='Search' />
            <SearchIcon style={{ color: 'grey', fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>LAMA.</Logo>
        </Center>
        <Right>
          <Link to={'/register'}>
            <MenuItem>REGISTER</MenuItem>
          </Link>
          <Link to={'/login'}>
            <MenuItem>LOGIN</MenuItem>
          </Link>
          <Link to={'/cart'}>
            <MenuItem>
              <Badge badgeContent={4} color='primary'>
                <ShoppingCartOutlinedIcon color='action' />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
