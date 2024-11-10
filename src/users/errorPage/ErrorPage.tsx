import React from 'react'
import { Link } from 'react-router-dom'
import Users from '../Users'

const ErrorPage = () => {
  return (
    <div>ErrorPage
        <h1>404</h1>
        <button>
            <Link to={'/users'}>Back to Home</Link>
        </button>
    </div>
  )
}

export default ErrorPage;