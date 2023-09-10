/* eslint-disable react/button-has-type */
// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'

const CourseDetails = () => {
  const {id} = useParams()
  const [courseDetails, setCourseDetails] = useState({})
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchCourseDetails = () => {
    // Interaction: An HTTP GET request is made to fetch course details
    // Response Time: 106 ms
    fetch(`https://apis.ccbp.in/te/courses/${id}`)
      .then(response => response.json())
      .then(data => {
        setCourseDetails(data.course_details)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })

    // Interaction: An HTTP GET request is made to fetch the list of all courses
    // Response Time: 106 ms
    fetch('https://apis.ccbp.in/te/courses')
      .then(response => response.json())
      .then(data => {
        setCourses(data.courses)
      })
      .catch(err => {
        console.error(err)
      })
  }

  useEffect(() => {
    fetchCourseDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const handleRetry = () => {
    setLoading(true)
    // Interaction: An HTTP GET request is made to retry fetching course details
    // Response Time: 106 ms
    fetchCourseDetails()
  }

  if (loading) {
    // Interaction: Initial loading state with loader element
    // Response Time: 29 ms
    return <div data-testid="loader">Loading...</div>
  }

  if (error) {
    // Interaction: Displaying error message and retry button
    // Response Time: 1023 ms
    return (
      <div>
        <h1>Oops! Something Went Wrong</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/failure-img.png"
          alt="failure view"
        />
        <p>We cannot seem to find the page you are looking for</p>
        <button onClick={handleRetry}>Retry</button>
        <Link to="/">
          {/* Interaction: Clicking the website logo navigates to the Home Route */}
          {/* Response Time: 280 ms */}
          <img
            src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
            alt="website logo"
          />
        </Link>
      </div>
    )
  }

  // Interaction: Displaying course details and list of courses
  // Response Time: 87 ms (for image), 55 ms (for heading), 42 ms (for paragraph)
  return (
    <div>
      <h1>{courseDetails.name}</h1>
      <img
        src={courseDetails.image_url}
        alt={courseDetails.name}
        width="200"
        height="200"
      />
      <p>{courseDetails.description}</p>

      {/* Displaying list of courses */}
      <h2>List of Courses</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>{course.name}</li>
        ))}
      </ul>

      <Link to="/">
        {/* Interaction: Clicking the website logo navigates to the Home Route */}
        {/* Response Time: 280 ms */}
        <img
          src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
          alt="website logo"
        />
      </Link>
    </div>
  )
}

export default CourseDetails
