
import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from './routes/Home'
import Game from './routes/Game'
import Login from './routes/Login'

export default App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/game" component={Game} />
    </main>
  </div>
)