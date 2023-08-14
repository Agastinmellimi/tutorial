import {Link} from 'react-router-dom'

import {NavBarContainer, NavBarLogo} from './StyledComponents'

const NavBar = () => (
  <NavBarContainer>
    <Link to="/">
      <NavBarLogo
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </NavBarContainer>
)
export default NavBar
