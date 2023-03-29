import React from 'react'
import { Link } from 'react-router-dom'

const Head = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/EmployeeLogin">EmployeeLogin</Link>
            </li>
            <li>
                <Link to="/Dashboaed"></Link>
            </li>
        </ul>
    </nav>
  )
}

export default Head