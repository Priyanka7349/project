import React from 'react'

const Navbar = () => {
  return (
    <>
    <ul className="nav">
      {/* <img src='./https://img.freepik.com/premium-photo/horseshoe-magnet-attracting-word-employee-white-background-3d-illustration-staff-retention-program-attractive-employer_556904-654.jpg?w=740' alt=''/> */}
    {/* <img src="https://tse3.explicit.bing.net/th?id=OIP.SfF0y9-kEv9WG2_yhjV5kwAAAA&pid=Api&P=0" alt="" /> */}
      <li><a  className='h' href="">Home</a></li>
      <li><a  className='e' href="">EmployeeList</a></li>
      <li><a className='l' href="">Logout</a></li>
    </ul>
    </>
  )
}

export default Navbar