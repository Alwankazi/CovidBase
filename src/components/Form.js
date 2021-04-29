import React, { useState } from 'react';
//import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import '../App.css';
import SubmitForm from '../pages/Submit';
import countryDetails from './../country_details.json';

function SearchForm(){
  const [selectedState, setSelectedState] = useState(0);
  
  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  }


  let distinct_states = null;
  let cityOptions  = null;
  let cities = null;

  let states = countryDetails.map(states => states.admin_name)
  .filter((value, index, self) => self.indexOf(value) === index)

  distinct_states = states.map((states) => <option key={states} value={states}>{states}</option>);
  
  if(selectedState){
    console.log(selectedState)
    let cityList = countryDetails.filter(states => states.admin_name === selectedState);
    let cities = cityList.map(states => states.city)
    cityOptions = cities.map((cities) => <option key={cities}>{cities}</option>);
    // type= cityList.city
    console.log(cities)
  }

  const maharashtra = ["", "Mumbai", "Nagpur", "Pune"];
  const karnataka = ["", "Bangalore", "Hubali","Mangalore", "Udupi", "Puttur", "Karwar", "Manipal", "Karkala", "Kaup"];
  const kerala = ["", "Kochi", "Trivandrum", "Kollam", "Kasaragod", "Kottayam", "Pallakad"];

  // let options = null;
  // let type = null;

  // if(selectedState === "Mahārāshtra"){
  //   type = maharashtra;
  // }
  // else if(selectedState === "Karnātaka"){
  //   type = karnataka;
  // }
  // else if(selectedState === "Kerala"){
  //   type = kerala;
  // }

  // if(type){
  //   options = type.map((el) => <option key={el}>{el}</option>);
  // }

  return(
    <div className="formDesign">
      <center>
        <p>CovidBase listings are not yet available. Please connect with me on Twitter/Instagram where I am sharing resources</p>
      </center>
      <Form>
        <Form.Group controlId="cbfState">
          <Form.Label>State</Form.Label>
          <Form.Control as="select" onChange={handleStateChange}>
          {distinct_states }
            {/* <option></option>
            <option>Delhi</option>
            <option>Karnataka</option>
            <option>Kerala</option>
            <option>Maharashtra</option> */}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="cbfCity">
          <Form.Label>City</Form.Label>
          <Form.Control as="select">
           {
             cityOptions 
           }
           {/*<option>Bangalore</option>
            <option>Mangalore</option>
            <option>Udupi</option>
            <option>Puttur</option>
            <option>Mulki</option>
            <option>Karkala</option> */}
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="cbfResource">
          <Form.Label>Resource</Form.Label>
          <Form.Control as="select">
            <option></option>
            <option>Beds</option>
            <option>Plasma</option>
            <option>Remdisivir</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </div>
  );
}

export default SearchForm;
