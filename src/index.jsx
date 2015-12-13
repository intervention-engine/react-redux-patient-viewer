import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Immutable from 'immutable';

import {PatientList} from './components/PatientList';
import {FHIRResourceReducer} from './reducers/FHIRResources';

import {FHIRQuery} from './utils/FHIRQuery';


const initialState = {};

const reducer = (state = initialState, action) => {
  return state;
};



const store = createStore(FHIRResourceReducer);
window.store = store;

const render = function(){
  let patients = store.getState().get('Patient_list', Immutable.Set()).map( id => store.getState().getIn(['Patient', id])).toJS();
  ReactDOM.render(
    <PatientList patients={patients} />,
    document.getElementById('app')
  );
}

store.subscribe(render);
render();

FHIRQuery(store, "Patient", {_count: 50});

// store.dispatch({type: "BUNDLE_SUCCESS", bundle: patientBundle});
