import styled from 'styled-components';

const CartStyles = styled.div`
  padding: 20px;
  position: relative;
  background: white;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  width: 35%;
  min-width: 500px;
  bottom: 0;
  transform: translateX(100%);
  /* ^^ cart automatically translated 100% which will put it offscreen */
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 5;
  display: grid;
  grid-template-rows: auto 1fr auto;
  ${props => props.open && `transform: translateX(0);`};
  /* ^^ if cart has a prop of open, cart will transform 0 and show on screen */
  header {
    border-bottom: 5px solid ${props => props.theme.black};
    margin-bottom: 0rem;
    padding-bottom: 0rem;
    p {
      text-align: right;
    }
  }
  footer {
    border-top: 10px double ${props => props.theme.black};
    margin-top: 2rem;
    padding-top: 2rem;
    display: flex;
    grid-template-columns: auto auto;
    align-items: center;
    font-size: 3rem;
    font-weight: 900;
    p {
      flex: 1 21%;
      margin: 0;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: scroll;
  }
`;

export default CartStyles;
