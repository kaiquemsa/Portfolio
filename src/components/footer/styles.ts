import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
      color: #d6dfed !important;
  }

`;

export const Background = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Ul = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const Socials = styled(Ul)`
  gap: 20px;

  a {
    font-size: 24px;
  }
`;

export const Links = styled(Ul)`
  gap: 10px;

  @media (min-width: 420px) {
    gap: 20px;
  }
`;

export const Legal = styled.p`
  font-size: 12px;
  margin: 0;
`;

export const Svg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: scaleY(1.75) scaleX(2.5);
  transform-origin: bottom;
  box-sizing: border-box;
  display: block;
  pointer-events: none;
`;

export const FooterContainer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 370px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 30px;
  padding-bottom: 80px;
  padding-left: 60px;
  width: 100%;

  @media (min-width: 420px) {
    align-items: center;
    padding-left: 0;
    gap: 20px;
  }
`;
