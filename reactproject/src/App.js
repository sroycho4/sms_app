import './App.css';
import { BrowserRouter as Router,Route,Switch, Routes} from 'react-router-dom';
import FooterComponents from './components/FooterComponents';
import HeaderComponents from './components/HeaderComponents';
import DekstopComponents from './components/DekstopComponents';

import SmsComponent from './components/SmsComponent';

function App() {
  return (
    <div>
      <Router>
     <HeaderComponents />
     <div className='container'>
      <switch>
        <Routes>
        <Route exact path='/' Component={DekstopComponents}> </Route>
        <Route path='/sms' Component={DekstopComponents}> </Route>
        <Route path='/add-sms' Component={SmsComponent}></Route>
       
        </Routes>
      </switch>
     </div>
     <FooterComponents />
     </Router>
    </div>
  );
}

export default App;
