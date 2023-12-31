import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" align="center">React-SpringBoot-FullStack Application (Student Management Sysytem)</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <Link className="btn btn-outline-light" to="/student">View Students</Link>
    <Link className="btn btn-outline-light" to="/addstudent">Add Student</Link>
  </div>
</nav>



    </div>
  )
}
