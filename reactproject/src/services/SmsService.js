import axios from 'axios'

const SMS_BASE_REST_API_URL = 'http://localhost:8080/sms';

class SmsService{


    smsSubmit(sms){
        return axios.post(SMS_BASE_REST_API_URL,sms)
    }

    
   
}

export default new SmsService();