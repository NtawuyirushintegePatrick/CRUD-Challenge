import React from 'react'

const Header= () => {
  return (
    <>
        
      <header className='head'>
      <h2>Klab EMS</h2>
      <div className='nav'>
        <a href='register'>Register</a>
        {/* <a href='employees'>Employees</a> */}
        <a href='admin'>Admin</a>
        <a href='todo'>Tasks</a>
        <a href='login'>Login</a>
      </div>
    </header>

    </>
  )
}

export default Header
