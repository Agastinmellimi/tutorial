import {Component} from 'react'

import RegisterContext from '../../Context/RegisterContext'

import NavBar from '../NavBar'

import {
  RegisterContainer,
  RegisterLoginContainer,
  RegisterImage,
  RegisterFormContainer,
  LoginTitle,
  InputFieldContainer,
  Label,
  Input,
  SelectBar,
  Option,
  RegisterNowBtn,
  ErrorMsg,
} from './StyledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {name: '', topic: topicsList[0].id, isError: false}

  onChangedNameValue = event => {
    this.setState({name: event.target.value})
  }

  changeErrorStatus = () => {
    this.setState({isError: true})
  }

  onChangedTopicValue = event => {
    this.setState({topic: event.target.value})
  }

  render() {
    const {name, topic, isError} = this.state
    const topicText = topicsList.find(eachItem => eachItem.id === topic)
    return (
      <RegisterContext.Consumer>
        {value => {
          const {updateRegisterStatus, updateNameAndTopic} = value
          const submitForm = event => {
            event.preventDefault()
            if (name === '') {
              this.changeErrorStatus()
            } else {
              updateRegisterStatus()
              updateNameAndTopic(name, topicText.displayText)
              const {history} = this.props
              history.replace('/')
            }
          }
          return (
            <>
              <NavBar />
              <RegisterContainer>
                <RegisterLoginContainer>
                  <RegisterImage
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                    alt="website register"
                  />
                  <RegisterFormContainer onSubmit={submitForm}>
                    <LoginTitle>Let us join</LoginTitle>
                    <InputFieldContainer>
                      <Label htmlFor="name">NAME</Label>
                      <Input
                        id="name"
                        value={name}
                        onChange={this.onChangedNameValue}
                      />
                    </InputFieldContainer>
                    <InputFieldContainer>
                      <Label htmlFor="topic">TOPIC</Label>
                      <SelectBar
                        value={topic}
                        onChange={this.onChangedTopicValue}
                      >
                        {topicsList.map(eachTopic => (
                          <Option value={eachTopic.id} key={eachTopic.id}>
                            {eachTopic.displayText}
                          </Option>
                        ))}
                      </SelectBar>
                    </InputFieldContainer>
                    <RegisterNowBtn type="submit">Register Now</RegisterNowBtn>
                    {isError && <ErrorMsg>Please enter your name</ErrorMsg>}
                  </RegisterFormContainer>
                </RegisterLoginContainer>
              </RegisterContainer>
            </>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}
export default Register
