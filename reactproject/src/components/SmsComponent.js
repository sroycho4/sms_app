import React, { useState,useEffect } from 'react'
import {Link,useParams ,useNavigate} from 'react-router-dom';
import SmsService from '../services/SmsService';
import { toast } from 'react-toastify';


const SmsComponent = () => {
    const [to, setTo] = useState('');
    const [message, setMessage] = useState('');

    const navigate = useNavigate();
 
   
    

    const saveOrUpdateCourse = (e) => {
        e.preventDefault();
    const sms={to,message}

    SmsService.smsSubmit(sms).then((response)=>{
      navigate('/sms');
    }).catch((error)=>{
        console.log(error)
    })
    console.log(sms)



    
  }

  return (
    <div>
    <br /><br />
    <div className = "container">
         <div className = "row">
             <div className = "card col-md-6 offset-md-3 offset-md-3">
                 <div className = "card-body">
                     <form>
                     <div className = "form-group mb-2">
                             <label className = "form-label"> To:</label>
                             <input
                                 type = "text"
                                 placeholder = "Enter mobile number"
                                 name = "to"
                                 className = "form-control"
                                 value = {to}
                                 onChange = {(e) => setTo(e.target.value)}
                             >
                             </input>
                         </div>
                        
                         <div className = "form-group mb-2">
                             <label className = "form-label"> Message:</label>
                             <input
                                 type = "text"
                                 placeholder = "Enter Message"
                                 name = "message"
                                 className = "form-control"
                                 value = {message}
                                 onChange = {(e) => setMessage(e.target.value)}
                             >
                             </input>
                         </div>
                         

                         <button className = "btn btn-success" onClick = {(e) => saveOrUpdateCourse(e)} >Submit </button>
                         <Link to="/courses" style = {{marginLeft:"10px"}} className="btn btn-danger"> Cancel </Link>
                     </form>

                 </div>
             </div>
         </div>

    </div>

 </div>
  )
}

export default SmsComponent