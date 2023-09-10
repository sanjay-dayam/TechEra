// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import CourseDetails from './components/CourseDetails'
import NotFound from './components/NotFound'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/courses/:id" component={CourseDetails} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App
