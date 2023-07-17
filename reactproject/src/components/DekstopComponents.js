import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import '../App.css'; // Import the CSS file for component-specific styles

const DesktopComponents = () => {
  return (
    <div className='container'>
      <h2 className='text-center'>Welcome to Your SMS Dashboard</h2>
      <Link to='/add-sms' className='btn btn-primary mb-2'>Add SMS</Link>
    </div>
  );
};

export default DesktopComponents;
