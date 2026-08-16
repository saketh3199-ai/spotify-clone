import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundScreen = () => {
  return (
    <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center bg-dark text-white">
      <h1 className="display-1 fw-bold">404</h1>
      <p className="fs-4 mb-4">Page Not Found</p>
      <Link to="/home" className="btn btn-success rounded-pill px-4">
        Go to Home
      </Link>
    </div>
  )
}

export default NotFoundScreen