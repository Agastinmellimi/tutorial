import {Link} from 'react-router-dom'
import RegisterContext from '../../Context/RegisterContext'
import Navbar from '../NavBar'

import {
  HomeContainer,
  Heading,
  Paragraph,
  RegisterBtn,
  MeetupImage,
} from './StyledComponents'

const Home = () => (
  <RegisterContext.Consumer>
    {value => {
      const {isRegister, name, topic} = value
      return (
        <>
          <Navbar />
          <HomeContainer>
            <Heading isRegister={isRegister}>
              {isRegister ? `Hello ${name}` : 'Welcome to Meetup'}
            </Heading>
            <Paragraph isRegister={isRegister}>
              {isRegister
                ? `Welcome to ${topic}`
                : 'Please Register for the topic'}
            </Paragraph>
            {isRegister === false && (
              <Link to="/register">
                <RegisterBtn type="button">Register</RegisterBtn>
              </Link>
            )}
            <MeetupImage
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </HomeContainer>
        </>
      )
    }}
  </RegisterContext.Consumer>
)

export default Home
