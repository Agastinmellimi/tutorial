import styled from 'styled-components'

// eslint-disable-next-line import/prefer-default-export
export const HomeContainer = styled.div`
  height: 100vh;
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`
export const Heading = styled.h1`
  color: ${props => (props.isRegister ? '#2563eb' : '#334155')};
  font-weight: ${props => (props.isRegister ? 600 : 550)};
  font-family: 'Roboto';
  font-size: 45px;
  margin-bottom: 7px;
  text-align: center;
`
export const Paragraph = styled.p`
  color: ${props => (props.isRegister ? '#334155' : '#475569')};
  font-weight: ${props => (props.isRegister ? 600 : 400)};
  font-family: 'Roboto';
  margin-top: 0;
  font-size: 25px;
  text-align: center;
`
export const RegisterBtn = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  background-color: #3b82f6;
  padding: 10px 20px 10px 20px;
  font-weight: 500;
  border-style: none;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
`
export const MeetupImage = styled.img`
  width: 90%;
  max-width: 700px;
  min-width: 300px;
  margin-top: 30px;
`
