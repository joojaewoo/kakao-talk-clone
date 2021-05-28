import styled from '@emotion/styled';

interface Props {
  width?: string;
  height?: string;
  margin?: string;
}

export default styled.button<Props>`
  border: none;
  border-radius: 100%;
  margin: ${(props) => props.margin || '0 5px'};
  & > svg {
    width: ${(props) => props.width || '20px'};
    height: ${(props) => props.height || '20px'};
    padding: 5px;
  }
`;
