/* eslint-disable jsx-a11y/anchor-is-valid */
// Home.js
/* eslint-disable react/button-has-type */
// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const coursesApiUrl = 'https://apis.ccbp.in/te/courses'

    fetch(coursesApiUrl)
      .then(response => response.json())
      .then(data => {
        setCourses(data.courses)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div data-testid="loader">Loading...</div>
  }

  if (error) {
    return (
      <div>
        <h1>Oops! Something Went Wrong</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
          alt="failure view"
        />

        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
            alt="website logo"
          />
        </Link>

        <p>We cannot seem to find the page you are looking for</p>
        <button onClick={() => window.location.reload()}>Retry</button>
      </div>
    )
  }

  return (
    <div>
      <h1>Courses</h1>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <Link to={`/courses/${course.id}`}>
              <img
                src={course.logo_url}
                alt={course.name}
                width="100"
                height="100"
              />
              <p>{course.name}</p>
            </Link>
            <Link>
              <img
                src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
                alt="website logo"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
