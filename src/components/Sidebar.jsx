import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div>
        <div>
            <Link to='/'>Dashboard</Link>
        </div>
        <div>
            <Link to='/about'>About</Link>
        </div>
    </div>
  )
}

export default Sidebar