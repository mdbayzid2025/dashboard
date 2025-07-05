import React from 'react'
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
<div className="flex flex-col items-center justify-center h-screen bg-white px-6">
      <h1 className="text-7xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">Page Not Found</h2>
      <p className="text-gray-600 text-center mb-6">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go Home
      </Link>
    </div>
  )
}

export default ErrorPage

