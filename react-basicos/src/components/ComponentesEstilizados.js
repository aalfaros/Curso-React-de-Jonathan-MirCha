import React from 'react';
import styled, {
  css,
  keyframes,
  ThemeProvider,
  createGlobalStyle,
} from 'styled-components';

export default function ComponentesEstilizados() {
  const mainColor = '#db7093';
  const mainAlphaColor = '#db709380';

  const setTransitionTime = (time) => `all ${time} ease-in-out`;

  const fadeIn = keyframes`
    0% { opacity: 0;}
    100% { opacity: 1;}
  `;

  const MyH3 = styled.h3`
    padding: 2rem;
    text-align: center;
    color: ${(props) => props.color || 'blue'};
    background-color: ${mainColor};
    transition: ${setTransitionTime('1s')};
    animation: ${fadeIn} 5s ease-out;

    ${(props) =>
      props.isButton &&
      css`
        margin: auto;
        max-width: 25%;
        border-radius: 0.5rem;
        cursor: pointer;
        color: maroon;
      `}

    &:hover {
      background-color: ${mainAlphaColor};
    }
  `;

  const light = {
    color: '#222',
    bgColor: '#ddd',
  };

  const dark = {
    color: '#ddd',
    bgColor: '#222',
  };

  const Box = styled.div`
    padding: 1rem;
    margin: 1rem auto;
    max-width: 50%;
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.bgColor};
  `;

  const BoxRounded = styled(Box)`
    border-radius: 1rem;
  `;

  const GlobalStyle = createGlobalStyle`
    h2 {
      padding: 2rem;
      background-color: blue;
      color: lightblue;
      text-transform: uppercase;
    }
  `;

  return (
    <>
      <GlobalStyle />
      <h2>Styled-Components</h2>
      <MyH3>Hola, soy un h3 estilizado con styled-components</MyH3>
      <MyH3 color="red">Hola, soy un h3 estilizado con styled-components</MyH3>
      <MyH3 isButton>Soy un h3 estilizado como botón</MyH3>
      <ThemeProvider theme={light}>
        <Box>Soy una caja 'light'</Box>
        <BoxRounded>Soy una caja redondeada 'light'</BoxRounded>
      </ThemeProvider>
      <ThemeProvider theme={dark}>
        <Box>Soy una caja 'dark'</Box>
        <BoxRounded>Soy una caja redondeada 'dark'</BoxRounded>
      </ThemeProvider>
    </>
  );
}
