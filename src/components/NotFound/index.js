import {
  NotFoundContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundMsg,
} from './StyledComponents'

const NotFound = () => (
  <NotFoundContainer>
    <NotFoundImg
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotFoundHeading>Page Not Found</NotFoundHeading>
    <NotFoundMsg>
      We are sorry, the page you requested could not be found
    </NotFoundMsg>
  </NotFoundContainer>
)
export default NotFound
