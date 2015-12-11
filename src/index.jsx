import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import {PatientList} from './components/PatientList';

import { patientBundle } from './mocks';

const patientJSON = patientBundle.entry.map((el) => {return el.resource;});


const initialState = {patients: patientJSON};

const reducer = (state = initialState, action) => {
  return state;
};



const store = createStore(reducer);
window.store = store;

ReactDOM.render(
  <PatientList patients={store.getState().patients} />,
  document.getElementById('app')
);
