import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div>
      <h2>Page Not Found!</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sed sit repellendus optio illo, labore velit enim temporibus doloremque fugiat ab sapiente voluptatibus, architecto tempore cum modi exercitationem, eaque nostrum?</p>

      <p>Go back to <Link to="/">Homepage</Link>.</p>
    </div>
  )
}
