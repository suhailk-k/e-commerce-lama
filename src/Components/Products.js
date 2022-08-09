import styled from 'styled-components';
import { polularProducts } from '../Data';
import Product from './Product';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: distance-between;
`;

function Products() {
  return (
    <Container>
      {polularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
}

export default Products;
