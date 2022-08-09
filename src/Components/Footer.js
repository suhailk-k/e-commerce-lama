import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Container = styled.div`
  display: flex;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desription = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  flex-wrap: wrap;
  display: flex;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
`;
const ContactList = styled.div`
  margin-bottom: 20px;
  dispaly: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

function Footer() {
  return (
    <Container>
      <Left>
        <Logo>LAMA.</Logo>
        <Desription>
          It communicates to customers you want to get rid of products fast
        </Desription>
        <SocialContainer>
          <SocialIcon color='385999'>
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon color='E4405F'>
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon color='55ACEE'>
            <TwitterIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Usefull links</Title>
        <List>
          <ListItem>Home</ListItem> <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem> <ListItem>Women Fashion</ListItem>{' '}
          <ListItem>Accessories</ListItem> <ListItem>My Account</ListItem>{' '}
          <ListItem>Order Tracking</ListItem> <ListItem>Wishlist</ListItem>{' '}
          <ListItem>Wishlist</ListItem> <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contacts</Title>
        <ContactList>
          <LocationOnIcon style={{ marginRight: '10px' }} />
          palakkad,kerala
        </ContactList>
        <ContactList>
          <PhoneIcon style={{ marginRight: '10px' }} />
          +919995329169
        </ContactList>
        <ContactList>
          <MailOutlineIcon style={{ marginRight: '10px' }} />
          suhailkk1999@gmail.com
        </ContactList>
        <Payment src='https://i.ibb.co/Qfvn4z6/payment.png' />
      </Right>
    </Container>
  );
}

export default Footer;
