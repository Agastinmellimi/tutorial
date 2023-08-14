import React from 'react'

const RegisterContext = React.createContext({
  isRegister: false,
  name: '',
  topic: '',
  updateRegisterStatus: () => {},
  updateNameAndTopic: () => {},
})
export default RegisterContext
