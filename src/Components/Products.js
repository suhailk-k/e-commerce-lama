import styled from 'styled-components';
// import { polularProducts } from '../Data';
import Product from './Product';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import ProductComponent from '../containers/ProductComponent';
import { setProducts } from '../redux/actions/ProductActions';

const Container = styled.div`
  padding: 20px;
  display: flex;

  flex-wrap: wrap;

  justify-content: ' distance-between';
`;

function Products() {
  // const ProductListing = () => {
  const products = useSelector((state) => state);

  const dispatch = useDispatch();
  const fetchProduct = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log('err', err);
      });
    console.log('llllll', response.data);
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <Container>
      {/* {polularProducts.map((item) => ( */}
      <Product
      // item={item} key={item.id}
      />
      {/* ))} */}
    </Container>
  );
}

export default Products;
