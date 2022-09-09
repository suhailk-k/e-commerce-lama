import React from 'react';
import styled from 'styled-components';
import Announcement from '../Components/Announcement';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { style } from '@mui/system';
import { mobile } from '../responsive';

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: '10px' })};
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    props.type === 'filled' ? 'black' : 'transparent'};
  color: ${(props) => props.type === 'filled' && 'white'};
`;

const TopTexts = styled.div`
  ${mobile({ display: 'none' })};
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })};
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })};
`;

const ProductDetile = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  margin: 10px;
`;

const Detiles = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.div``;

const ProductId = styled.div``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.div``;

const PriceDetile = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const PriceAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: '5px 15px' })};
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: '20px' })};
`;
const Hr = styled.hr`
  background-color: #eee;
  height: 1px;
  border: none;
`;

const Summery = styled.div`
  flex: 1;
  border: 0.5px solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;
const SummeryTitle = styled.h1`
  font-weight: 200;
`;

const SummeryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '24px'};
`;
const SummeryItemText = styled.span``;
const SummeryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

function Cart() {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type='filled'>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetile>
                <Image src='https://rukminim1.flixcart.com/image/800/960/xif0q/jean/y/v/s/30-hljn001406-highlander-original-imag62rjtg5gnzq5-bb.jpeg?q=50' />
                <Detiles>
                  <ProductName>
                    <b>Product: </b>HIGHLANDER{' '}
                  </ProductName>
                  <ProductId>
                    <b>Id: </b>6534765776{' '}
                  </ProductId>
                  <ProductColor color='black' />
                  <ProductSize>
                    <b>Size: </b>37{' '}
                  </ProductSize>
                </Detiles>
              </ProductDetile>
              <PriceDetile>
                <PriceAmountContainer>
                  <AddIcon />
                  <ProductAmount>2</ProductAmount>
                  <RemoveIcon />
                </PriceAmountContainer>
                <ProductPrice>$200</ProductPrice>
              </PriceDetile>
            </Product>
            <Hr />
            <Product>
              <ProductDetile>
                <Image src='https://rukminim1.flixcart.com/image/800/960/xif0q/jean/y/v/s/30-hljn001406-highlander-original-imag62rjtg5gnzq5-bb.jpeg?q=50' />
                <Detiles>
                  <ProductName>
                    <b>Product: </b>HIGHLANDER{' '}
                  </ProductName>
                  <ProductId>
                    <b>Id: </b>6534765776{' '}
                  </ProductId>
                  <ProductColor color='black' />
                  <ProductSize>
                    <b>Size: </b>37{' '}
                  </ProductSize>
                </Detiles>
              </ProductDetile>
              <PriceDetile>
                <PriceAmountContainer>
                  <AddIcon />
                  <ProductAmount>2</ProductAmount>
                  <RemoveIcon />
                </PriceAmountContainer>
                <ProductPrice>$200</ProductPrice>
              </PriceDetile>
            </Product>
          </Info>
          <Summery>
            <SummeryTitle>ORDER SUMMERY</SummeryTitle>
            <SummeryItem>
              <SummeryItemText>Subtotal</SummeryItemText>
              <SummeryItemPrice>$200</SummeryItemPrice>
            </SummeryItem>
            <SummeryItem>
              <SummeryItemText>Estimated Shipping</SummeryItemText>
              <SummeryItemPrice>$5.2</SummeryItemPrice>
            </SummeryItem>
            <SummeryItem>
              <SummeryItemText>Shipping Discount</SummeryItemText>
              <SummeryItemPrice>$ -5.2</SummeryItemPrice>
            </SummeryItem>
            <SummeryItem type='total'>
              <SummeryItemText>Total</SummeryItemText>
              <SummeryItemPrice>$200</SummeryItemPrice>
            </SummeryItem>
            <Button>CHECKOUT NOW</Button>
          </Summery>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
}

export default Cart;
