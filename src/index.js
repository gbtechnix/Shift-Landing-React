import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Terms from './views/terms'
import Origional from './views/origional'
import PrivacyPolicy from './views/privacy-policy'
import Landing from './views/landing'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Terms} exact path="/terms" />
        <Route component={Origional} path="**" />
        <Route component={PrivacyPolicy} exact path="/privacy-policy" />
        <Route component={Landing} exact path="/" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
