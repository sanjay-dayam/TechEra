// eslint-disable-next-line no-unused-vars
import React from 'react'
import {Link} from 'react-router-dom'

const NotFound = () => (
  <div>
    <h1>Page Not Found</h1>
    <p>We are sorry, the page you requested could not be found</p>
    {/* Add an HTML image element */}
    <img
      src="https://assets.ccbp.in/frontend/react-js/tech-era/not-found-img.png"
      alt="not found"
    />
    {/* Add an HTML image element with alt as "website logo" wrapped with Link */}
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
      />
    </Link>
    <Link to="/">Go to Home</Link>
  </div>
)

export default NotFound
