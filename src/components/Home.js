import React from 'react'
import '../App.css';


const Home = () => {
  return (
    <>
      <div className='home-container'>
        <div className='home-cards'>
          <div className='welcome-card'>
            <p>
              Welcome to Klab Employees
              Managment system
            </p>
          </div>
          <div className='welcome-card'>
            <img src='pro.png'></img>
          </div>
        </div>
        <div className='home-input-login'>
          <div className='home-loginBtn'>
            <button className='welcome-button'><a href="login">Go</a></button>
          </div>
        </div>
      </div>


    </>
  )
}

export default Home