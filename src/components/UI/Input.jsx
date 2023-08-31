import React from 'react'
import { styled } from 'styled-components'

const Input = (props) => {
  return (
    <StyledInput {...props} placeholder={props.placeholder} type={props.inputType} />
  )
}

const StyledInput = styled.input`
    display: ${(props) => props.dispay};
`

export default Input