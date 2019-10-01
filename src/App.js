import React from 'react'
import { Root, Routes, addPrefetchExcludes } from 'react-static'
//
import { Link, Router } from 'components/Router'
import Dynamic from 'containers/Dynamic'
//
import './app.css'
//
import Navbar from './components/atoms/Navbar'
import StyledLink from './components/atoms/StyledLink'


// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic'])

function App() {
  return (
    <Root>
      <Navbar>
        <StyledLink to="/">LOGO</StyledLink>
        <StyledLink to="/blog">ブログ</StyledLink>
        <StyledLink to="/about">お問い合わせ</StyledLink>
        {/* <StyledLink to="/dynamic">Dynamic</StyledLink> */}
      </Navbar>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Dynamic path="dynamic" />
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
