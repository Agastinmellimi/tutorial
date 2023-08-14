import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'

import RegisterContext from './Context/RegisterContext'
import Home from './components/Home'
import Register from './components/Register'
import NotFound from './components/NotFound'

import './App.css'

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

// Replace your code here
class App extends Component {
  state = {isRegister: false, name: '', topic: topicsList[0].id}

  updateRegisterStatus = () => {
    this.setState({isRegister: true})
  }

  updateNameAndTopic = (name, topic) => {
    this.setState({name, topic})
  }

  render() {
    const {name, topic, isRegister} = this.state
    return (
      <RegisterContext.Provider
        value={{
          name,
          topic,
          isRegister,
          updateNameAndTopic: this.updateNameAndTopic,
          updateRegisterStatus: this.updateRegisterStatus,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App
