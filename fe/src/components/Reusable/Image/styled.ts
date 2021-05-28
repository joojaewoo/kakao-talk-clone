import styled from '@emotion/styled';

interface Props {
  width: string;
  height: string;
}

export default styled.div<Props>`
  box-shadow: 1px 1px 1px gray;
  border-radius: 40%;
  background-color: white;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  & > svg,
  img {
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    border-radius: 40%;
  }
`;
