import React from 'react'
import Navbar from './Navbar'
//import Dashboard from './Dashboard'
import Emplogin from './Emplogin'
import Empdata from './Empdata'
import Form from './Form'

const App = () => {
  return (
    <>
    <Navbar/>
    <Emplogin/>
    {/* <Dashboard/> */}
    <Empdata/>
    <Form/>
    </>
  )
}

export default App