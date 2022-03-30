 
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Bdaddress from './Components/Contact/Bdaddress';
import Contact from './Components/Contact/Contact';
import UsAddress from './Components/Contact/UsAddress';
 
import Country from './Components/Country/Country';
import CountryDetails from './Components/CountryDetails/CountryDetails';
 
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Meal from './Components/Meal/Meal';
import MelaDetails from './Components/MealDetaosl/MelaDetails';
import NotFound from './Components/NotFound/NotFound';
 

function App() {
  return (
    <div className="App">
    
   
        <Header></Header>
       
 
   
  
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
          <Route path='/country' element={<Country></Country>}></Route>
        <Route path='/meal' element={< Meal></ Meal>}> </Route>
        <Route path='meal-detail/:mealid' element={<MelaDetails></MelaDetails>}></Route>
        <Route path='/country-detail/:countryname' element={<CountryDetails></CountryDetails>}> </Route>
        <Route path='/contact' element={<Contact></Contact>}>
          <Route path='bd-address' element={<Bdaddress></Bdaddress>}></Route>
          <Route path='us-address' element={<UsAddress></UsAddress>}></Route>


        </Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>


      </Routes>
      
    </div>
  );
}

export default App;
