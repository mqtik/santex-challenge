import { styled } from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px 90px 20px 10px;
  position: fixed;
  border: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40px;
  z-index: 1;
  display: flex;
  justify-content: center;
  background: linear-gradient(to bottom, transparent 0%, black 100%);

  img {
    height: 100%;
    width: 100px;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <img
        src="https://santexgroup.com/santex-logo-dark.svg"
        alt="Santex Logo"
      />
    </Wrapper>
  );
}

export default Footer;
