import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    display: flex;
    align-items: center;

    > span {
      margin-right: 16px;
      white-space: nowrap;
    }

    > input {
      display: block;
      width: 100%;
      height: 44px;
      border: none;
      background: none;
    }
`
type Props = {
    label:string;
}&React.InputHTMLAttributes<HTMLInputElement>
const Input:React.FC<Props>=(props)=>{
    const {label,children,...rest}=props;//把除了label和children的所有属性都拷贝过去
    return(
    <Label>
        <span>{props.label}</span>
        <input{...rest}/>
    </Label>
    )
}


export default Input