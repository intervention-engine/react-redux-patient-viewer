import React from 'react';
import ReactDOM from 'react-dom';

import {PatientList} from './components/PatientList';


import { patientBundle } from './mocks';

const patientJSON = patientBundle.entry.map((el) => {return el.resource;});

ReactDOM.render(
  <PatientList patients={patientJSON} />,
  document.getElementById('app')
);
