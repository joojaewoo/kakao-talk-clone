import styled from '@emotion/styled';

interface Props {
  width?: string;
  height?: string;
  margin?: string;
}

export default styled.button<Props>`
  border: none;
  border-radius: 100%;
  margin: ${(props) => props.margin || '5px'};
  & > svg {
    width: ${(props) => props.width || '30px'};
    height: ${(props) => props.height || '30px'};
    padding: 5px;
  }
`;
