import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const RegisterLoginContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 50px;
  width: 90%;
`
export const RegisterImage = styled.img`
  width: 50%;
  max-width: 400px;
`
export const RegisterFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 15px;
  max-width: 400px;
`
export const LoginTitle = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 37px;
  font-weight: 550;
`
export const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`
export const Label = styled.label`
  color: #64748b;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  margin-top: 5px;
`
export const Input = styled.input`
  padding: 7px;
  color: #475569;
  font-family: 'Roboto';
  font-size: 15px;
  outline: none;
  border: #cbd5e1 solid 1.2px;
  border-radius: 5px;
`
export const SelectBar = styled.select`
  padding: 7px;
  color: #475569;
  font-family: 'Roboto';
  font-size: 15px;
  outline: none;
  border: #cbd5e1 solid 1.2px;
  border-radius: 5px;
`
export const Option = styled.option`
  color: #475569;
  font-family: 'Roboto';
  font-size: 15px;
`
export const RegisterNowBtn = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  align-self: flex-start;
  font-size: 16px;
  margin-top: 30px;
  background-color: #3b82f6;
  padding: 10px 20px 10px 20px;
  font-weight: 500;
  border-style: none;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 2px;
`
