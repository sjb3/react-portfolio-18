import styled from 'styled-components';

export const H2 = styled.div`
  font-size: 2em;
  &:hover {
    color: grey;
    font-size: 3em;
    font-style: italic;
  }
`;

export const Adiv = styled.div`
  color: white;
  /* font-family: 'Shrikhand'; */
  &:hover {
    color: greenyellow;
    font-size: 1em;
    font-style: italic;
    font-stretch: italic;
  }
  &:active {
    color: red;
  }
`;

export const Bdiv = styled.div`
  color: grey;
  &:hover {
    color: purple;
    font-style: italic;

  }
  &:active {
    color: red;
  }
`;
