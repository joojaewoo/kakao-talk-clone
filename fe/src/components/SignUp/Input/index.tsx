import React, { FC } from 'react';
import { StyledInput } from './styled';

interface Props {
  text: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  name: string;
  type?: string;
}

const Input: FC<Props> = ({ text, onChange, placeholder, name, type = 'text' }) => (
  <StyledInput type={type} value={text} onChange={onChange} placeholder={placeholder} name={name} />
);

export default Input;
