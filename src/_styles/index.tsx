import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  & button {
    background: rgba(51, 51, 255, 1) !important;
  }
`

export const Header = styled.h4`
  letter-spacing: 1px;
  font-weight: bold;
  text-align: center;
`

export const Input = styled.input`
  width: 100%;
  border: 1px solid #f2f2f2;
  padding: 10px;
  margin-bottom: 10px;
`

export const ErrorMessage = styled.p`
  text-align: center;
  margin-top: 10px;
  color: #ff0000;
`

