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
  &:hover {
    color: yellow;
  }
  &:active {
    color: red;
  }
`;

export const Bdiv = styled.div`
  color: grey;
  &:hover {
    color: yellow;
    font-style: italic;

  }
  &:active {
    color: red;
  }
`;
