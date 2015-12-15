import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Immutable from 'immutable';

import {PatientList} from './components/PatientList';
import {FHIRResource} from './components/FHIRResource';
import {FHIRResourceReducer} from './reducers/FHIRResources';


import {FHIRQuery} from './utils/FHIRQuery';



const store = createStore(FHIRResourceReducer);
window.store = store;


let extract = function(resourceType) {
   return store.getState().get(`${resourceType}_list`, Immutable.Set()).map( id => store.getState().getIn([resourceType, id])).toJS();
}


// const render = function(){
//   let patients = store.getState().get('Patient_list', Immutable.Set()).map( id => store.getState().getIn(['Patient', id])).toJS();
//   ReactDOM.render(
//     <PatientList patients={patients} />,
//     document.getElementById('app')
//   );
// }

const render = function(){
  let resources = extract("Observation");
  ReactDOM.render(
    <div>
      {resources.map((resource, index) =>
        <FHIRResource resource={resource}
                  key={index} />
      )}
    </div>,
    document.getElementById('app')
  );
}

store.subscribe(render);
render();

FHIRQuery(store, "Observation", {_count: 50});

// store.dispatch({type: "BUNDLE_SUCCESS", bundle: patientBundle});
