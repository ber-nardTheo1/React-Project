//import logo from './logo.svg';
import './App.css';
import React from 'react';


//function Name (brand){
//  return <>
 // <div className='container'>
   // <h1 className='heading-el'> Student Information</h1>
   //
   // <p className="introduction"> welcome to {brand.brand} brand</p>
   // <p className='university-el'><b>University Name: </b>{brand.universityName}</p>
   // <p><b>Student Name:</b> {brand.StudentName}</p>
   // <p><b>Major:</b> {brand.major}</p>
    //<p><b>courses:</b> {brand.course}</p>

  //</div>
 // </>
//}

//function App(){
 // return <>
  //<Name brand="Theo`s"
 // universityName="Nagoya University"
  //StudentName="Bernard Malunga"
  //major="Economic Development and Policy Management"
  //course="Development Economics"></Name>
  //</>
//}

function App({name, university, major, year}){
  return(
    <div>
    <h1>Student Information</h1>
    <p>Student Name: {name}</p>
    <p>University Name: {university}</p>
    <p>Major: {major}</p>
    <p>Year: {year}</p>
  </div>) 

}


App.defaultProps = {
  name:"Theo",
  university: "Nagoya University",
  major: "Economic Development",
  year: "Fourth year"
}


  


export default App;
